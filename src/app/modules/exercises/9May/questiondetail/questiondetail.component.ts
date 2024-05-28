import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../../services/question.service';
import { Question } from '../../../../interfaces/question';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../../../../services/subject.service';
import { Answer } from '../../../../interfaces/answer';
import Swal from 'sweetalert2'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-questiondetail',
  templateUrl: './questiondetail.component.html',
  styleUrl: './questiondetail.component.scss'
})
export class QuestiondetailComponent implements OnInit {
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
    private questionSV: QuestionService,
    private subjectSV: SubjectService,
    private router: Router
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

  popUpConfirm(title: string) {
    return Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    });
  }

  popUpSuccess(title: string) {
    return Swal.fire({
      title: title,
      icon: "success"
    })
  }

  popUpFailed(title: string) {
    return Swal.fire({
      title: title,
      icon: "error"
    })
  }

  showError(error: any) {
    if (error.status == 404) {
      this.popUpFailed("Not Found!");
    } else {
      this.popUpFailed("Failed!");
    }
  }

  onSubmit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.popUpConfirm("Are you sure?").then((result) => {
        if (result.isConfirmed) {
          this.questionSV.update(this.id, this.form.value as Question).subscribe({
            next: (res: HttpResponse<any>) => {
              if (res.status == 200) {
                this.popUpSuccess("Updated!").then(() => {
                  location.reload();
                });
              }
            },
            error: (error) => {
              this.showError(error)
            }
          })
        }
      });
    }
  }

  delelte() {
    this.popUpConfirm("Are you sure?").then((result) => {
      if (result.isConfirmed) {
        this.questionSV.deleteItem(this.id).subscribe({
          next: (res: HttpResponse<any>) => {
            if (res.status == 200) {
              this.popUpSuccess("Deleted!").then(() => {
                this.router.navigateByUrl('exercises/9may/list');
              });
            }
          },
          error: (error) => {
            this.showError(error)
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
