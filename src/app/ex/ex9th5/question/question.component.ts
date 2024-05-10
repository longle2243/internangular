import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  dynamicform: FormGroup;
  questions = [
    "question 1",
    "question 2"
  ]
  answers!: FormArray;

  constructor(){
    this.dynamicform = new FormGroup({
      question: new FormControl(this.questions[0], [Validators.required]),
      answers: new FormArray([new FormControl({ question: 'question 1', answer: '' }, [Validators.required])]),
      // answers: new FormArray([new FormControl("", [Validators.required])]),
    })

    this.answers = this.dynamicform.controls['answers'] as FormArray;
  }

  isInValidandTouched(form: FormGroup, controlname: string) {
    const field = form.controls[controlname]
    return field.invalid && (field.dirty || field.touched);
  }

  // Answer(){
  //   return this.dynamicform.controls['answers'] as FormArray;
  // }

  // controlAnswer(){
  //   // console.log(this.dynamicform.controls);
  //   return (this.dynamicform.controls['answers'] as FormArray).controls;
  // }

  createAnswer(question: string){
    // return new FormControl("", [Validators.required]);
    return new FormControl({ question: question, answer: '' }, [Validators.required]);
  }

  newQA(){
    this.answers.push(this.createAnswer(this.dynamicform.controls['question'].value))
    // console.log(this.answers.get('answer'));
    // console.log(this.dynamicform.controls['question'].value);
  }

  delAnswer(index: number, test: any) {
    console.log(test);
    console.log(this.answers.controls[index].value);
    (this.dynamicform.controls['answers'] as FormArray).removeAt(index);
  }

  onSubmit(){
    if(this.dynamicform.valid){
      console.log("OK");
    }
  }
}
