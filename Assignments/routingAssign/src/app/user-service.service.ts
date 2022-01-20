import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
passingData(){
  return[{Name:'kiran',Age:18},{Name:'Abhi',Age:24},{Name:'rudra',Age:80}]
}
  constructor() { }
}
