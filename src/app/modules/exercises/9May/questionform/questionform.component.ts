import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { SubjectService } from '../../../../services/subject.service';
import { QuestionService } from '../../../../services/question.service';
import { Question } from '../../../../interfaces/question';
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

  form = this.fb.group({
    subject: ['', Validators.required],
    difficulty: ['', Validators.required],
    content: ['', Validators.required],

    answers: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private questionService: QuestionService,
  ) {
    this.addAnswer()
  }

  ngOnInit(): void {
    this.subjectService.getData().subscribe((res) => {
      this.subjects = res;
    })

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

  deleteAnswer(index: number) {
    this.answers.removeAt(index);
  }

  onSubmit() {
    // const subjects = [
    //   { name: 'Math' },
    //   { name: 'Science' },
    //   { name: 'Physical' },
    //   { name: 'Biology' },
    //   { name: 'Chemistry' },
    //   { name: 'Geometry' },
    //   { name: 'Astronomy' },
    //   { name: 'Medicine' },
    //   { name: 'Geology' },
    //   { name: 'Geography' },
    //   { name: 'History' },
    //   { name: 'Economics' },
    //   { name: 'Psychology' },
    //   { name: 'Architecture' },
    //   { name: 'Art' },
    //   { name: 'Music' },
    // ]
    // for (let subject of subjects) {
    //   this.subjectService.create(subject).subscribe((res) => {
    //     console.log(res);
    //   })
    // }
    
    if (this.form.valid) {
      this.questionService.create(this.form.value as Question).subscribe((res) => {
        console.log(res);
      })
    }
  }
}



