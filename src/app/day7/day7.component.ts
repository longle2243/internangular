import { Component, OnInit } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrl: './day7.component.scss'
})
export class Day7Component implements OnInit{
  posts : any;
  constructor(private simple: SimpleService){}

  ngOnInit(): void {
    this.simple.getPosts().subscribe((res) =>{
      this.posts = res;
    });

    console.log(this.posts);
    
  }
}
