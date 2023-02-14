import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  turnOn:boolean=false;

  constructor() { }
  
}
