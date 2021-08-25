import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GrowButtonComponent } from './grow-button/grow-button.component';
import { ChildComponent } from './child/child.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GrowButtonComponent,
    ChildComponent,
    HomeBtnComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
