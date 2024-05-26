import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../../services/question.service';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrl: './listquestion.component.scss'
})
export class ListquestionComponent implements OnInit {
  questions: any;
  constructor(private questionSV: QuestionService) { }

  ngOnInit(): void {
    this.questionSV.getAll().subscribe((res) =>{
      this.questions = res
    })
  }
}
