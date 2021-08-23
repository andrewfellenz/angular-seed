import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = "Andrew";
  title: string;

  constructor(private headerTitleService: HeaderTitleService ) { }

  ngOnInit() {
    this.title = this.headerTitleService.getTitle();
  }
}
