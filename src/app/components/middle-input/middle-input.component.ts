import {Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-middle-input',
  templateUrl: './middle-input.component.html',
  styleUrls: ['./middle-input.component.css']
})
export class MiddleInputComponent implements OnInit {
    @Output() newEvent = new EventEmitter<string>();

  userInput;
  constructor() { }

  ngOnInit(): void {

  }
  showData(): void {
    this.newEvent.emit(this.userInput);
  }
}
