import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { popUpConfirm, popUpSuccess } from '@app/functions/popup-function';
import { Answer } from '@app/interfaces/answer.interface';
import { Question } from '@app/interfaces/question.interface';
import { Subject } from '@app/interfaces/subject.interface';
import { QuestionService } from '@app/services/question.service';
import { SubjectService } from '@app/services/subject.service';

@Component({
  selector: 'app-detailquestion',
  templateUrl: './detailquestion.component.html',
  styleUrl: './detailquestion.component.scss',
})
export class DetailquestionComponent implements OnInit {
  id?: number;
  question?: Question;
  subjects?: Subject[];
  isEdit = true;
  answerType = ['single', 'multiple'];
  questionDifficulty = ['Easy', 'Medium', 'Hard'];

  form = this.fb.group({
    subject: ['', Validators.required],
    difficulty: ['', Validators.required],
    content: ['', Validators.required],
    type: ['', Validators.required],
    answers: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private acrouter: ActivatedRoute,
    private router: Router,
    private questionSV: QuestionService,
    private subjectSV: SubjectService
  ) {}

  ngOnInit(): void {
    this.id = this.acrouter.snapshot.params['id'] as number;
    this.onOffEdit();
    this.loadSubject();
    this.loadQuestion();
  }

  loadQuestion() {
    this.questionSV.getItem(this.id!).subscribe({
      next: res => {
        this.question = res;
        this.patchValue();
      },
    });
  }

  loadSubject() {
    this.subjectSV.getData().subscribe(res => {
      this.subjects = res;
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    
    if (this.form.valid) {
      popUpConfirm('Are you sure?').then(result => {
        if (result.isConfirmed) {
          this.questionSV
            .update(this.id!, this.form.value as Question)
            .subscribe({
              next: () => {
                popUpSuccess('Updated!').then(() => {
                  location.reload();
                });
              },
            });
        }
      });
    }
  }

  delelte() {
    popUpConfirm('Are you sure?').then(result => {
      if (result.isConfirmed) {
        this.questionSV.deleteItem(this.id!).subscribe({
          next: () => {
            popUpSuccess('Deleted!').then(() => {
              this.router.navigateByUrl('private/exercises/question/list');
            });
          },
        });
      }
    });
  }

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

  createAnswer(answer: Answer): FormGroup {
    return this.fb.group({
      content: [answer.content, Validators.required],
      iscorrect: [answer.iscorrect, Validators.required],
    });
  }

  deleteAnswer(index: number) {
    this.answers.removeAt(index);
  }

  patchValue() {
    this.form.patchValue({
      subject: this.question?.subject,
      difficulty: this.question?.difficulty,
      content: this.question?.content,
      type: this.question?.type,
    });

    this.answers.clear();
    this.question?.answers.map(answer => {
      this.answers.push(this.createAnswer(answer));
    });
    this.form.controls['answers'].disable();
  }

  onOffEdit() {
    this.isEdit = !this.isEdit;
    // Object.keys return key with type string
    // keyof typeof this.form.controls (Press Type for angular know this is key controls)
    const controlNames = Object.keys(
      this.form.controls
    ) as (keyof typeof this.form.controls)[];
    controlNames.map(control => {
      if (this.isEdit) {
        this.form.controls[control].enable();

      } else {
        this.form.controls[control].disable();
      }
    });
  }

  // LOGIC HANDLE TYPE SINGLE/MULTIPLE CHOICE ANSWER
  onTypeCheck(): void {
    this.answers.controls.map(answer => {
      answer.get('iscorrect')?.setValue(false);
    });
  }

  onOptionChange(id: number) {
    if (this.form.controls['type'].value === 'single') {
      this.answers.controls.map(answer => {
        answer.get('iscorrect')?.setValue(false);
      });

      this.answers.at(id).get('iscorrect')?.setValue(true);
    } else {
      const currentValue = this.answers.at(id).get('iscorrect')?.value;

      if (!currentValue) {
        this.answers.at(id).get('iscorrect')?.setValue(false);
      } else {
        this.answers.at(id).get('iscorrect')?.setValue(true);
      }
    }
  }
}
