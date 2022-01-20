import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  values:any
  constructor(private val:ServiceService ) { 
  }
  ngOnInit(): void {
    // this.values=this.val.passingData()
    this.values=this.val.passingData()
  }


}
