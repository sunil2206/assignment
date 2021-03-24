import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.css']
})
export class ThirdQuestionComponent implements OnInit {
  cntrlArr = ['phoneNumber1'];
  cnt = 1;
  i = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): void {
    this.cnt++;
    this.cntrlArr.push('phoneNumber' + this.cnt);
  }

  viewNumbers(form1: NgForm): void {
    console.log(form1.value);
  }
}
