import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
passingMethods(){
  return[{Name:'sasi',Department:"Development"},{Name:'Kiran',Department:'Development'},{Name:'Geetha',Department:'testing'}]
}
  constructor() {
  }

}
