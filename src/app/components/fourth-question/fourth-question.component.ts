import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.css']
})
export class FourthQuestionComponent implements OnInit {
  userInput;
  constructor() { }

  ngOnInit(): void {

  }
  changeMsg(msg): void{
    this.userInput = msg;
  }
}
