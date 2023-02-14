import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BookApiService } from '../book-api.service';




@Component({
  selector: 'app-outlibrary',
  templateUrl: './outlibrary.component.html',
  styleUrls: ['./outlibrary.component.css']
})
export class OutlibraryComponent {
myApi='';
bookName:string='';

  constructor(public bookApi:BookApiService , private httpClient:HttpClient,private toast : NgToastService){
 
    }
    ngOnInit(){}
    /* istanbul ignore next */
    onSearch=()=>{
      this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q='+this.bookName)
      .subscribe(Response =>{
        const bookresponse=Response as {items:[{volumeInfo:{title:string;subtitle:string;
          averageRating:number;publisher:string;language:string;pageCount:number;ratingsCount:number;
          imageLinks:{smallThumbnail:string};previewLink:string} }]}
          bookresponse.items.forEach(item=>{
            this.bookApi.books.push({title:item.volumeInfo.title,subtitle:item.volumeInfo.subtitle,averageRating:item.volumeInfo.averageRating,publisher:item.volumeInfo.publisher,language:item.volumeInfo.language,pageCount:item.volumeInfo.pageCount,ratingsCount:item.volumeInfo.ratingsCount,imageLink:item.volumeInfo.imageLinks.smallThumbnail,previewLink:item.volumeInfo.previewLink})
          })

        })
      }

/* istanbul ignore next */
      openPreview=(url:string)=>{
        window.open(url, "_blank");
      }
    /* istanbul ignore next */
    openSuccess(){
      this.toast.success({detail:'Success',summary:'This is Success', sticky:true,position:'tr'});
      }
  }


