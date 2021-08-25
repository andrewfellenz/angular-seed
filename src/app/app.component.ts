import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  user = {id:1, name: 'Kevin', gender: 'M', ageGroup: '51+', userCode: 'M51+', reqs:{}, reqsStatus: {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, registered: true, email: 'kevin@kevinruse.com'};
  
  loggedIn: boolean = false;

  logIn(event) {
    console.log(event);
    console.log(typeof event);
    this.loggedIn = event;
  }


  constructor() {}

  ngOnInit(): void {
  }

}
