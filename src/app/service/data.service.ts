import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   sdata="service data"  // variable

  constructor() { }

 checkData(){           // nethod
  return "hello hi"
 }

}
