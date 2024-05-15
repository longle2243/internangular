import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss'
})
export class DynamicformComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      questions: new FormArray([]),
    })
  }

  newQuestion() {
    const newQuestion = new FormGroup({
      question: new FormControl('', [Validators.required]),
      answers: new FormArray([])
    })
    return newQuestion;
  }

  newAnswer() {
    const newAnswer = new FormControl(null, [Validators.required])
    return newAnswer;
  }

  get questions() {
    return this.form.controls['questions'] as FormArray;
  }

  getAnswers(index: number) {
    return this.questions.at(index).get('answers') as FormArray
  }

  addQuestion() {
    this.questions.push(this.newQuestion())
  }

  addAnswer(index: number) {
    this.getAnswers(index).push(this.newAnswer())
  }

  deleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  deleteAnswer(indexQ: number, indexA: number) {
    this.getAnswers(indexQ).removeAt(indexA);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("FORM VALID");
    }
  }
}
