import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value=''
  title = 'dataBindingAssign';
  color = 'red'
  interPolationExample='displayProp'
  borderProperty = '1px solid black'
  PropertyExample = 'hello'
  switchingVal = true
  hideTable() {
    if (this.switchingVal) {
      this.switchingVal = false
    } else {
      this.switchingVal = true
    }
  }
}
