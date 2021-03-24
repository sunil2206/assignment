import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {
  displayArray = [2, 3, 10, 15, 26, 35, 50, 63];
  selectedIndex = 0;
  arraySize;
  returnData="";
  errMsg="";
  constructor() { }

  ngOnInit(): void {
    this.arraySize = this.displayArray.length;
  }
  showData(userInput: HTMLInputElement){
    this.returnData = "";
      let userIndex = userInput.value;
    if (userIndex >= this.arraySize){
      this.errMsg = 'Invalid index';
    }else {
      this.returnData = this.displayArray[userIndex];
    }
  }
}
