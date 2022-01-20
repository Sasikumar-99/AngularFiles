import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  a='Hello'
  result=''
  getData(val:any){
    this.result=val
  }
  constructor() { }

  ngOnInit(): void {
  }

}
