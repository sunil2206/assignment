import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent implements OnInit {
  cntrlArr = ['phoneNumber1'];
  cnt = 1;
  constructor() { }

  ngOnInit(): void {
  }
  add(): void{
    this.cnt++;
    this.cntrlArr.push('phoneNumber' + this.cnt);
  }
  viewNumbers(form1: NgForm): void{
    console.log(form1.value);
  }

}
