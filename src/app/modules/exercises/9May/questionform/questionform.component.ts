import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { SubjectService } from '../../../../services/subject.service';
import { QuestionService } from '../../../../services/question.service';
import { Question } from '../../../../interfaces/question';
import { PopupService } from '../../../../services/popup.service';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrl: './questionform.component.scss'
})
export class QuestionformComponent implements OnInit {
  subjects: any;
  questionDifficulty = ['Easy', 'Medium', 'Hard']
  answerType = ['single', 'multiple',]
  ischecked = false;

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private questionService: QuestionService,
    private popupSV: PopupService,
    private _cdr: ChangeDetectorRef
  ) {
    this.addAnswer()
  }

  ngOnInit(): void {
    this.loadSubject()
    this.form.controls['type'].setValue(this.answerType[0])
  }

  onSubmit() {
    console.log(this.answers.value);
    // console.log(this.form.controls['answers'].value);
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.createQuestion()
    }
  }

  // SERVICE
  loadSubject() {
    this.subjectService.getData().subscribe((res) => {
      this.subjects = res;
    })
  }


  // FORM
  form = this.fb.group({
    subject: ['', Validators.required],
    difficulty: ['', Validators.required],
    content: ['', Validators.required],
    type: ['', Validators.required],
    answers: this.fb.array([]),
  });

  get answers() {
    return this.form.controls['answers'] as FormArray;
  }

  addAnswer() {
    const answer = this.fb.group({
      content: [null, Validators.required],
      iscorrect: [false, Validators.required]
    })
    this.answers.push(answer)
  }

  deleteAnswer(index: number) {
    this.popupSV.popUpConfirm("Are you sure ?").then((res) => {
      if (res.isConfirmed) {
        this.answers.removeAt(index);
      }
    })
  }

  deleteChoice(index: number) {
    this.popupSV.popUpConfirm("Are you sure ?").then((res) => {
      if (res.isConfirmed) {
        this.answers.removeAt(index);
      }
    })
  }

  deleteCorrect(index: number) {
    this.popupSV.popUpConfirm("Are you sure ?").then((res) => {
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


  // LOGIC HANDLE TYPE SINGLE/MULTIPLE CHOICE ANSWER
  onTypeCheck(): void {
    if (this.form.controls['type'].value === 'single') {
      this.answers.controls.map(answer => {
        answer.get('iscorrect')?.setValue(false);
        // console.log(answer);
      })
      // this._cdr.detectChanges();
    }
  }


  onOptionChange(id: number) {
    if (this.form.controls['type'].value === 'single') {
      this.answers.controls.map(answer => {
        answer.get('iscorrect')?.setValue(false);
      })
      this.answers.at(id).get('iscorrect')?.setValue(true)
    } else {
      var currentValue = this.answers.at(id).get('iscorrect')?.value
      if (!currentValue) {
        this.answers.at(id).get('iscorrect')?.setValue(false)
      } else {
        this.answers.at(id).get('iscorrect')?.setValue(true)
      }
    }
  }
}