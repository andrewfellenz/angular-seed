import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grow-button',
  template: `<button (click)="growButtonPressed()">Grow</button>`,
  styleUrls: ['./grow-button.component.css']
})
export class GrowButtonComponent implements OnInit {

    colorScheme: string = 'green';
    background: HTMLElement = document.querySelector('body');

    growButtonPressed() {
        this.background.style.transition = 'background-color 10s ease';
        this.background.style.backgroundColor = this.colorScheme;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
