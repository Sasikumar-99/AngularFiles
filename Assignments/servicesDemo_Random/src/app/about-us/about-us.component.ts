import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit, AfterViewInit {

  constructor(private val: ServiceService) { }
  values: any
  value: string=''
  printingVal=''
  @ViewChild('spanError') spanErrVal: ElementRef<any> | any
  @ViewChild('borderDisp') dispBorder:ElementRef<any>|any
  // @ViewChild('inputField') inputValue: ElementRef<any> | any

  ngOnInit(): void {
    this.values = this.val.passingData()
  }

  ngAfterViewInit(): void {

  }
  displayVal() {
    const ranDomVal = Math.floor(Math.random() * (999-100)+100)
    const DepartmentVal1 = this.values[0].Department.charAt(0)
    const DepartmentVal2 = this.values[0].Department.charAt(1)
    const DepartmentVal3 = this.values[0].Department.charAt(2)
    if(this.value===''){
      this.dispBorder.nativeElement.style.border='2px solid red'
      this.spanErrVal.nativeElement.innerText='**please enter the values'
      this.spanErrVal.nativeElement.style.color='red'
    }else{
      this.dispBorder.nativeElement.style.border='1px solid black'
      this.spanErrVal.nativeElement.innerText=''
      for (let i = 0; i < this.value.length; i++) {
        // this.spanErrVal.nativeElement.innerText = `TY${this.value.charAt(0)}${this.value.charAt(1)}${this.value.charAt(2)}${DepartmentVal1}${DepartmentVal2}${DepartmentVal3}${ranDomVal}`
       
        this.printingVal=`TY${this.value.charAt(0)}${this.value.charAt(1)}${this.value.charAt(2)}${DepartmentVal1}${DepartmentVal2}${DepartmentVal3}${ranDomVal}`
      }
  }
  }


}
