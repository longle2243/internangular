import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent implements OnInit{
  data:any;

  constructor(private apiservice: ApiserviceService){}
  ngOnInit(): void {
    this.apiservice.getData().subscribe((response) =>{
      this.data = response;
    })
  }
  
}
