import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ycomponent',
  templateUrl: './ycomponent.component.html',
  styleUrls: ['./ycomponent.component.css']
})
export class YcomponentComponent implements OnInit {
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
