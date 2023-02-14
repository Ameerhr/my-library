import { Component, Input } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-sitting',
  templateUrl: './sitting.component.html',
  styleUrls: ['./sitting.component.css']
})
export class SittingComponent {
  names: string[] = [];
  nameInput: string='';
  message: string='';

  
  
  constructor(public mode:DarkModeService,private toast : NgToastService){}
  ngOnInit(){}
/* istanbul ignore next */
  dark=(event:Event)=>{
    let Target = event.currentTarget as HTMLInputElement;
    this.mode.turnOn = Target.checked

  }
  
/* istanbul ignore next */
  addName(form: NgForm) {
    if (form.invalid) {
     
      return this.topRight();
    }

    if (this.names.length < 2) {
      this.names.push(this.nameInput);
      this.nameInput = '';
      return this.openSuccess();
    } else {
      return this.topLeft();
    }
  }
  openSuccess(){
   this.toast.success({detail:'Success',summary:'This is Success', sticky:true,position:'tr',duration:2000})
    }
    
   topLeft(){
    this.toast.warning({detail:'warning',summary:'You can only add two names', sticky:true,position:'tr',duration:2000})

       }
       topRight(){
        this.toast.error({detail:'Eror',summary:'You did not enter a name', sticky:true,position:'tr',duration:2000})
    
           }  
}


