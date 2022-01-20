import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'servicesAssign';
  valueFromServices:any=''
constructor(private getVar:UserServiceService){
}
  ngOnInit(): void {
    this.valueFromServices=this.getVar.passingMethods()
  }

}
