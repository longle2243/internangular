import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { SubjectService } from '../../../../services/subject.service';
import { QuestionService } from '../../../../services/question.service';
import { Question } from '../../../../interfaces/question';
import Swal from 'sweetalert2';
import { PopupService } from '../../../../services/popup.service';
// import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrl: './questionform.component.scss'
})
export class QuestionformComponent implements OnInit {

  subjects: any;

  questionDifficulty = [
    'Easy',
    'Medium',
    'Hard'
  ]

  answerType = [
    'single',
    'multiple',
  ]

  form = this.fb.group({
    subject: ['', Validators.required],
    difficulty: ['', Validators.required],
    content: ['', Validators.required],
    type: ['', Validators.required],
    answers: this.fb.array([]),
    choices: this.fb.array([]),
    corrects: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private questionService: QuestionService,
    private popupSV: PopupService
  ) {
    this.addAnswer()
    // this.addChoice()
    // this.addCorrect()
  }

  ngOnInit(): void {
    this.subjectService.getData().subscribe((res) => {
      this.subjects = res;
    })
  }

  get answers() {
    return this.form.controls['answers'] as FormArray;
  }

  get choices() {
    return this.form.controls['choices'] as FormArray;
  }
  
  get corrects() {
    return this.form.controls['corrects'] as FormArray;
  }

  addAnswer() {
    const answer = this.fb.group({
      content: [null, Validators.required],
      iscorrect: [false, Validators.required]
    })
    this.answers.push(answer)
  }

  addChoice() {
    const answer = this.fb.group({
      content: [null, Validators.required]
    })
    this.choices.push(answer)
  }

  addCorrect() {
    const answer = this.fb.group({
      content: [null, Validators.required]
    })
    this.corrects.push(answer)
  }


  deleteAnswer(index: number) {
    this.popupSV.popUpConfirm("Bạn có chắc chắn muốn xóa ?").then((res) => {
      if (res.isConfirmed) {
        this.answers.removeAt(index);
      }
    })
  }

  deleteChoice(index: number) {
    this.popupSV.popUpConfirm("Bạn có chắc chắn muốn xóa ?").then((res) => {
      if (res.isConfirmed) {
        this.answers.removeAt(index);
      }
    })
  }

  deleteCorrect(index: number) {
    this.popupSV.popUpConfirm("Bạn có chắc chắn muốn xóa ?").then((res) => {
      if (res.isConfirmed) {
        this.answers.removeAt(index);
      }
    })
  }

  createQuestion() {
    this.questionService.create(this.form.value as Question).subscribe((res) => {
      if (res) {
        this.popupSV.popUpSuccess("Created!")
        this.form.reset()
      }
    })
  }

  onSubmit() {
    console.log(this.form.controls['answers'].value);
    this.form.markAllAsTouched()
    if (this.form.valid) {
      // this.createQuestion()
    }
  }

  onTypeChange(type: string): void {
    if (type === 'single') {
      while (this.corrects.length > 1) {
        this.corrects.removeAt(1);
      }
    }
  }
}



