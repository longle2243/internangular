import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { popUpConfirm, popUpSuccess } from '@app/functions/popup-function';
import { Question } from '@app/interfaces/question.interface';
import { Subject } from '@app/interfaces/subject.interface';
import { QuestionService } from '@app/services/question.service';
import { SubjectService } from '@app/services/subject.service';

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrl: './createquestion.component.scss',
})
export class CreatequestionComponent implements OnInit {
  subjects?: Subject[];
  questionDifficulty = ['Easy', 'Medium', 'Hard'];
  answerType = ['single', 'multiple'];

  constructor(
    private fb: FormBuilder,
    private subjectSV: SubjectService,
    private questionSV: QuestionService,
    private cdr: ChangeDetectorRef
  ) {
    this.addAnswer();
    console.log(this.answers.value);
  }

  ngOnInit(): void {
    this.loadSubject();
    this.form.controls['type'].setValue(this.answerType[0]);
    this.cdr.detectChanges();
  }

  onSubmit() {
    this.answers.at(0).get('iscorrect')?.value;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.createQuestion();
    }
  }

  // SERVICE
  loadSubject() {
    this.subjectSV.getData().subscribe(res => {
      this.subjects = res;
    });
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
      iscorrect: [false, Validators.required],
    });
    this.answers.push(answer);
  }

  deleteAnswer(index: number) {
    popUpConfirm('Are you sure ?').then(res => {
      if (res.isConfirmed) {
        this.answers.removeAt(index);
      }
    });
  }

  createQuestion() {
    this.questionSV.create(this.form.value as Question).subscribe(res => {
      if (res) {
        popUpSuccess('Created!');
        this.form.reset();
        this.form.controls['type'].setValue(this.answerType[0]);
        this.onTypeCheck();
      }
    });
  }

  // LOGIC HANDLE TYPE SINGLE/MULTIPLE CHOICE ANSWER
  onTypeCheck(): void {
    if (this.form.controls['type'].value === 'single') {
      this.answers.controls.map(answer => {
        answer.get('iscorrect')?.setValue(false);
      });
    }
  }

  onOptionChange(id: number) {
    console.log(this.answers.value);
    if (this.form.controls['type'].value === 'single') {
      this.answers.controls.map(answer => {
        answer.get('iscorrect')?.setValue(false);
      });
      this.answers.at(id).get('iscorrect')?.setValue(true);
      // this.cdr.detectChanges();
    } else {
      const currentValue = this.answers.at(id).get('iscorrect')?.value;
      if (!currentValue) {
        this.answers.at(id).get('iscorrect')?.setValue(false);
      } else {
        this.answers.at(id).get('iscorrect')?.setValue(true);
      }
    }
    console.log(this.answers.value);
  }

  getIscorrect(i: number) {
    console.log("HAHA: "+this.answers.at(i).get('iscorrect')?.value);
    
    return !this.answers.at(i).get('iscorrect')?.value;
  }
}
