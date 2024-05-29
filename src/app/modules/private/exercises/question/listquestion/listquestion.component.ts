import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs';
import { QuestionService } from '@app/services/question.service';
import { SubjectService } from '@app/services/subject.service';
import { Question } from '@app/interfaces/question.interface';
import { Subject } from '@app/interfaces/subject.interface';
import {
  popUpConfirm,
  popUpSuccess,
  showError,
} from '@app/functions/popup-function';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrl: './listquestion.component.scss',
})
export class ListquestionComponent implements OnInit {
  p: number = 1;
  questions?: Question[];
  subjects?: Subject[];
  datafilter?: Question[];
  valuefilter?: string;
  valuesearch?: string;
  pageNumber?: number;
  isloadDone = false;
  isTimeOut = false;

  constructor(
    private questionSV: QuestionService,
    private subjectSV: SubjectService,
    private acrouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadQuestion(), this.loadSubject(), this.getParam();
  }

  // SERVICE API
  loadSubject() {
    this.subjectSV.getData().subscribe(res => {
      this.subjects = res;
    });
  }

  loadQuestion() {
    this.questionSV
      .getAll()
      .pipe(timeout(2000))
      .subscribe({
        next: res => {
          this.questions = res;
          this.datafilter = this.questions;
        },
        error: () => {
          this.isTimeOut = true;
        },
      });
  }

  getParam() {
    this.acrouter.queryParams.subscribe(param => {
      this.valuesearch = param['search'] || '';
      this.valuefilter = param['filter'] || '';
      this.pageNumber = param['page'] || '';
      this.loadData();
    });
  }

  // POP UP CONFIRM
  delete(id: number) {
    popUpConfirm('Are you sure?').then(result => {
      if (result.isConfirmed) {
        this.questionSV.deleteItem(id).subscribe({
          next: () => {
            popUpSuccess('Deleted!');
            this.loadQuestion();
          },
          error: (error: HttpErrorResponse) => {
            showError(error);
          },
        });
      }
    });
  }

  // FUNCTION GROUP: SEARCH & FILTER
  onSearchFilter() {
    this.router.navigate([], {
      queryParams: { filter: this.valuefilter, search: this.valuesearch },
    });
  }

  loadData() {
    if (this.valuefilter && this.valuesearch) {
      this.searchfilter();
    } else if (this.valuefilter) {
      this.filter();
    } else if (this.valuesearch) {
      this.search();
    } else if (this.pageNumber) {
      this.p=this.pageNumber;
    } else {
      this.datafilter = this.questions;
    }
  }

  filter() {
    this.datafilter = this.questions!.filter(
      (question: { subject: string }) => question.subject === this.valuefilter
    );
  }

  search() {
    this.datafilter = this.questions!.filter((question: { content: string }) =>
      question.content.toLowerCase().includes(this.valuesearch!.toLowerCase())
    );
  }

  searchfilter() {
    let dataTemp = [];
    dataTemp = this.questions!.filter(
      (question: { subject: string }) => question.subject === this.valuefilter
    );
    this.datafilter = dataTemp.filter((question: { content: string }) =>
      question.content.toLowerCase().includes(this.valuesearch!.toLowerCase())
    );
  }

  pageChanged(page:number){
    this.router.navigate([], {
      queryParams: { filter: this.valuefilter, search: this.valuesearch, page: page },
    });
  }
}
