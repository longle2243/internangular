import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../../services/question.service';
import { PopupService } from '../../../../services/popup.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../../../../services/subject.service';
import { Question } from '../../../../interfaces/question';
import { TimeoutError, timeout } from 'rxjs';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrl: './listquestion.component.scss'
})
export class ListquestionComponent implements OnInit {
  p: number = 1;
  questions: any;
  subjects: any;
  datafilter?: any;
  items: any;
  valuefilter?: string
  valuesearch?: string
  isloadDone = false;
  isTimeOut = false;

  constructor(
    private questionSV: QuestionService,
    private popupSV: PopupService,
    private subjectSV: SubjectService,
    private acrouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadQuestion()
    this.loadSubject()

    this.acrouter.queryParams.subscribe(param => {
      this.valuesearch = param['search'] || '';
      this.valuefilter = param['filter'] || '';
      this.searchContent();
      this.filterSubject();
    })
  }

  loadSubject() {
    this.subjectSV.getData().subscribe((res) => {
      this.subjects = res
    })
  }

  loadQuestion() {
    this.questionSV.getAll().pipe(timeout(2000)).subscribe({
      next: (res) => {
        this.questions = res
        this.datafilter = this.questions
      },
      error: () => {
        this.isTimeOut = true;
      }
    })
  }

  delete(id: number) {
    this.popupSV.popUpConfirm("Are you sure?").then((result) => {
      if (result.isConfirmed) {
        this.questionSV.deleteItem(id).subscribe({
          next: (res: HttpResponse<any>) => {
            if (res.status == 200) {
              this.popupSV.popUpSuccess("Deleted!");
              this.loadQuestion();
            }
          },
          error: (error) => {
            this.popupSV.showError(error)
          }
        })
      }
    });
  }

  filterSubject() {
    if (!this.valuefilter) {
      this.datafilter = this.questions
    } else {
      this.datafilter = this.questions.filter((question: { subject: any; }) => question.subject === this.valuefilter);
    }
  }

  searchContent() {
    if (!this.valuesearch) {
      this.datafilter = this.questions
    } else {
      this.datafilter = this.questions.filter((question: { content: any; }) => question.content.toLowerCase().includes(this.valuesearch?.toLowerCase()));
    }
  }

  searchAndFilter() {
    this.datafilter = this.questions.filter((question: { subject: any; }) => question.subject === this.valuefilter);
    this.datafilter = this.questions.filter((question: { content: any; }) => question.content.toLowerCase().includes(this.valuesearch?.toLowerCase()));
  }

  search() {
    this.router.navigate([], { queryParams: { search: this.valuesearch } });
  }

  filter() {
    this.router.navigate([], { queryParams: { filter: this.valuefilter } });
  }

  loadData() {
    if (this.valuefilter && this.valuesearch) {
      this
    }
  }
}
