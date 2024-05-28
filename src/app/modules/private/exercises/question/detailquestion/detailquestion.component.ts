import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '@app/interfaces/answer.interface';
import { Question } from '@app/interfaces/question.interface';
import { PopupService } from '@app/services/popup.service';
import { QuestionService } from '@app/services/question.service';
import { SubjectService } from '@app/services/subject.service';

@Component({
  selector: 'app-detailquestion',
  templateUrl: './detailquestion.component.html',
  styleUrl: './detailquestion.component.scss'
})
export class DetailquestionComponent {
  id: any;
  question?: Question;
  subjects: any;
  isEdit = true;

  questionDifficulty = [
    'Easy',
    'Medium',
    'Hard'
  ]

  form = this.fb.group({
    subject: ['', Validators.required],
    difficulty: ['', Validators.required],
    content: ['', Validators.required],
    answers: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private acrouter: ActivatedRoute,
    private router: Router,
    private questionSV: QuestionService,
    private subjectSV: SubjectService,
    private popupSV: PopupService
  ) { }

  ngOnInit(): void {
    this.id = this.acrouter.snapshot.params['id'];
    this.onOffEdit();
    this.loadSubject();
    this.loadQuestion();
  }

  loadQuestion() {
    this.questionSV.getItem(this.id).subscribe((res) => {
      this.question = res;
      this.patchValue();
    })
  }

  loadSubject() {
    this.subjectSV.getData().subscribe((res) => {
      this.subjects = res;
    })
  }


  onSubmit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.popupSV.popUpConfirm("Are you sure?").then((result) => {
        if (result.isConfirmed) {
          this.questionSV.update(this.id, this.form.value as Question).subscribe({
            next: (res: HttpResponse<any>) => {
              if (res.status == 200) {
                this.popupSV.popUpSuccess("Updated!").then(() => {
                  location.reload();
                });
              }
            },
            error: (error) => {
              this.popupSV.showError(error)
            }
          })
        }
      });
    }
  }

  delelte() {
    this.popupSV.popUpConfirm("Are you sure?").then((result) => {
      if (result.isConfirmed) {
        this.questionSV.deleteItem(this.id).subscribe({
          next: (res: HttpResponse<any>) => {
            if (res.status == 200) {
              this.popupSV.popUpSuccess("Deleted!").then(() => {
                this.router.navigateByUrl('private/exercises/question/list');
              });
            }
          },
          error: (error) => {
            this.popupSV.showError(error)
          }
        })
      }
    });
  }

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

  createAnswer(answer: Answer): FormGroup {
    return this.fb.group({
      content: [answer.content, Validators.required],
      iscorrect: [answer.iscorrect, Validators.required]
    })
  }

  deleteAnswer(index: number) {
    this.answers.removeAt(index);
  }

  patchValue() {
    this.form.patchValue({
      subject: this.question?.subject,
      difficulty: this.question?.difficulty,
      content: this.question?.content,
    })

    this.answers.clear();
    this.question?.answers.map(answer => {
      this.answers.push(this.createAnswer(answer))
    })
    this.form.controls['answers'].disable();
  }

  onOffEdit() {
    this.isEdit = !this.isEdit;
    // Object.keys return key with type string
    // keyof typeof this.form.controls (Ép kiểu cho hệ thống hiểu đây là key controls)
    const controlNames = Object.keys(this.form.controls) as (keyof typeof this.form.controls)[];
    controlNames.map(control => {
      if (this.isEdit) {
        this.form.controls[control].enable();
      } else {
        this.form.controls[control].disable();
      }
    })
  }
}
