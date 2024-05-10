import { Component, OnInit } from '@angular/core';
import { QuestionService } from './service/question.service';
import { AnswerService } from './service/answer.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrl: './listquestion.component.scss'
})
export class ListquestionComponent implements OnInit {
  questions: any;
  answers: any;
  formQA: FormGroup;

  constructor(private ApiQuestion: QuestionService, private ApiAnswer: AnswerService) {
    this.formQA = new FormGroup({
      listQA: new FormArray([this.createQA()])
    });
  }

  ngOnInit(): void {
    this.ApiQuestion.getData().subscribe((res) => {
      this.questions = res;
    });

    this.ApiAnswer.getData().subscribe((res) => {
      this.answers = res;
    });
  }

  getListQA() {
    return this.formQA.controls['listQA'] as FormArray;
  }

  createQA() {
    const newqa = new FormGroup({
      question: new FormControl('', [Validators.required]),
      answer: new FormControl('', [Validators.required]),
    })
    return newqa
  }

  newQA() {
    this.getListQA().push(this.createQA())
  }

  delQA(index: number) {
    this.getListQA().removeAt(index);
  }

  onSubmit(){
    if (this.formQA.valid) {
      console.log(this.getListQA().value);
    }
  }
}