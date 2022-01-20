import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  passingData(){
    const val=[
      {name:'KiranTheBoss',Age:'18+',Department:'Development'},{name:'abhi',Age:'18+',Department:'Testing'},{name:'rudraGowda',Age:'18+',Department:'Development'}
    ]
    return val
  }

  constructor() { }
}
