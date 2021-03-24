import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-xcomponent',
  templateUrl: './xcomponent.component.html',
  styleUrls: ['./xcomponent.component.css']
})
export class XcomponentComponent implements OnInit {
  @Input()
  dataMsg;
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
