import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeoutError, timeout } from 'rxjs';
import { QuestionService } from '@app/services/question.service';
import { PopupService } from '@app/services/popup.service';
import { SubjectService } from '@app/services/subject.service';

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
    this.loadQuestion(),
      this.loadSubject(),
      this.getParam()
  }


  // SERVICE API
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

  getParam() {
    this.acrouter.queryParams.subscribe(param => {
      this.valuesearch = param['search'] || '';
      this.valuefilter = param['filter'] || '';
      this.loadData()
    })
  }


  // POP UP CONFIRM
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


  // FUNCTION GROUP: SEARCH & FILTER
  onSearchFilter() {
    this.router.navigate([], { queryParams: { filter: this.valuefilter, search: this.valuesearch } });
  }

  loadData() {
    if (this.valuefilter && this.valuesearch) {
      this.searchfilter()
    } else if (this.valuefilter) {
      this.filter()
    } else if (this.valuesearch) {      
      this.search()
    } else {
      this.datafilter = this.questions
    }
  }

  filter() {
    this.datafilter = this.questions.filter((question: { subject: any; }) => question.subject === this.valuefilter);
  }

  search() {
    this.datafilter = this.questions.filter((question: { content: any; }) => question.content.toLowerCase().includes(this.valuesearch?.toLowerCase()));
  }

  searchfilter() {
    var dataTemp = []
    dataTemp = this.questions.filter((question: { subject: any; }) => question.subject === this.valuefilter);
    this.datafilter = dataTemp.filter((question: { content: any; }) => question.content.toLowerCase().includes(this.valuesearch?.toLowerCase()));
  }
}
