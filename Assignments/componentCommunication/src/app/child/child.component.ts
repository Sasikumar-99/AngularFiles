import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() ParentToChild: any
  @Output() Message: EventEmitter<any> = new EventEmitter()
  passingData() {
    this.Message.emit('good morning')
  }
  constructor() { }


  ngOnInit(): void {
  }

}
