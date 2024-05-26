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

  get answers() {
    return this.form.controls['answers'] as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private acrouter: ActivatedRoute,
    private questionSV: QuestionService,
    private subjectSV: SubjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.acrouter.snapshot.params['id'];
    this.subjectSV.getData().subscribe((res) => {
      this.subjects = res;
    })
    this.onOffEdit();
    this.loadQuestion();
  }

  loadQuestion() {
    this.questionSV.getItem(this.id).subscribe((res) => {
      this.question = res;
      this.patchValue();
      // this.onOffEdit();
    })
  }

  onSubmit() {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.form.valid) {
          this.questionSV.update(this.id, this.form.value as Question).subscribe((res) => {
            if (res) {
              Swal.fire({
                title: "Updated!",
                icon: "success"
              }).then(() => {
                location.reload();
              });
            }
          })
        }
      }
    });

    // if (this.form.valid) {
    //   this.questionSV.update(this.id, this.form.value as Question).subscribe((res) => {
    //     location.reload();
    //   })
    // }
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
    this.question?.answers.forEach(answer => {
      this.answers.push(this.createAnswer(answer))
    })
    this.form.controls['answers'].disable();
  }

  onOffEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.form.controls['subject'].enable();
      this.form.controls['difficulty'].enable();
      this.form.controls['content'].enable();
      this.form.controls['answers'].enable();
    } else {
      this.form.controls['subject'].disable();
      this.form.controls['difficulty'].disable();
      this.form.controls['content'].disable();
      this.form.controls['answers'].disable();
    }
  }


  delelte() {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionSV.deleteItem(this.id).subscribe((res: HttpResponse<any>) => {
          if (res.status == 200) {
            Swal.fire({
              title: "Deleted!",
              icon: "success"
            }).then(() => {
              this.router.navigateByUrl('exercises/9may/list');
            });
          }
        })
      }
    });
  }
}
