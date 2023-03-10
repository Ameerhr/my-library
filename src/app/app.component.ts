import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book';


  constructor(public mode:DarkModeService){}

  toBlack=()=>{
    if(this.mode.turnOn)
    {
      return {
        backgroundColor:'gray',
        color:'white'
      }
    }
    else
    {
      return{
        backgroundColor:'white',
        color:'black'
      }

    }


  }
  
}
