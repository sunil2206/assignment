import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-corner-box',
  templateUrl: './corner-box.component.html',
  styleUrls: ['./corner-box.component.css']
})
export class CornerBoxComponent implements OnInit {

  constructor() { }
  @Input()
  message;
  ngOnInit(): void {
  }

}
