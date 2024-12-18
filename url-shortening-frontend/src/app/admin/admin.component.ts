import { Component } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  checked: boolean = false
  value: string = '';
  isDisplaying1: boolean = true;
  isDisplaying2: boolean = false;
  isDisplaying3: boolean = false;
  pageUser(){
    this.isDisplaying1 = true;
    this.isDisplaying2 = false;
    this.isDisplaying3 = false;
  }

  pageRole(){
    this.isDisplaying1 = false;
    this.isDisplaying2 = true;
    this.isDisplaying3 = false; 
  }

  pagePermission(){
    this.isDisplaying1 = false;
    this.isDisplaying2 = false;
    this.isDisplaying3 = true;
  }
  }

