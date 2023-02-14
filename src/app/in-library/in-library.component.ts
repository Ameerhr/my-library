import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { readBuilderProgram } from 'typescript';
import { AddbookService } from '../addbook.service';

@Component({
  selector: 'app-in-library',
  templateUrl: './in-library.component.html',
  styleUrls: ['./in-library.component.css']
})
export class InLibraryComponent {
  

  users=this.AddbookService.users;
  constructor(private AddbookService:AddbookService, private toast : NgToastService){

  }
  ngOnInit(){}
  //openSuccess(){
    //this.toast.success({detail:'Success',summary:'This is Success', sticky:true,position:'tr'})
   // }
 
}
