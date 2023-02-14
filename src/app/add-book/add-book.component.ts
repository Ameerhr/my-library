import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddbookService } from '../addbook.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  user : { name: string; quantity: string; tag: string;image:string } | undefined ;
  users:{ name: string; quantity: string; tag: string;image:string } [] = [];
  imageUrl="";
  constructor(private AddbookService:AddbookService,private toast : NgToastService){
  }
  ngOnInit(){}
/* istanbul ignore next */
  uploadimg=(event:any)=>{
    console.log(event)
    const file = new FileReader()
    file.readAsDataURL(event.target.files[0])
    file.onload=(e:any)=>{
      this.imageUrl=e.target.result
    }
  
  }
/* istanbul ignore next */
  onSubmit = (formDetails : NgForm) => {
    this.user = {
      name: formDetails.value.name,
      tag: formDetails.value.tag,
      quantity: formDetails.value.quantity,
      image:this.imageUrl
    }
    console.log('onSubmit')
    this.AddbookService.addUser(this.user)
  formDetails.reset()
  return this.openSuccess();


  }
   openSuccess(){
    this.toast.success({detail:'Success',summary:'This is Success', sticky:true,position:'tr'})
    }
    topRight(){
      this.toast.error({detail:'Eror',summary:'You did not enter a name', sticky:true,position:'tr',duration:2000})
  
         }  
}
