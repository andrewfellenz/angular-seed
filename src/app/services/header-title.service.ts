import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {

  getTitle() {
    return 'Title for now!';
  }

  constructor() { }
}
