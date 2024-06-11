import { Component, OnInit } from '@angular/core';
import { Profile } from '@app/interfaces/profile.interface';
import { Question } from '@app/interfaces/question.interface';
import { ProfileService } from '@app/services/profile.service';
import { QuestionService } from '@app/services/question.service';
import { concatMap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrl: './combination.component.scss',
})
export class CombinationComponent implements OnInit {
  questions?: Question[];
  profile?: Profile;
  questions$ = this.questionSV.getAll();
  profile$ = this.profileSV.getProfiles();

  constructor(
    private questionSV: QuestionService,
    private profileSV: ProfileService
  ) {}

  ngOnInit(): void {
    // this.questionSV.getAll().subscribe(response => {
    //   this.questions = response;
    //   console.log(this.questions);
    // });

    // this.profileSV.getProfiles().subscribe(response => {
    //   this.profile = response;
    //   console.log(this.profiles);
    // });

    forkJoin([this.questions$, this.profile$]).subscribe(
      ([questions, profile]) => {
        this.questions = questions;
        this.profile = profile;
      }
    );

  }
}
