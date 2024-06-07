import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent implements OnInit, OnDestroy {
  @Input() name?: string;

  ngOnInit(): void {
    console.log('Init');
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
  }
}
