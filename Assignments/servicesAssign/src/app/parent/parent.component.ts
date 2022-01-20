import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private value:UserServiceService) { }
valueFromServices:any=''

  ngOnInit(): void {
this.valueFromServices=this.value.passingMethods()
  }

}
