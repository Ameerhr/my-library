import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  books:{title:string;subtitle:string;averageRating:number;publisher:string;language:string;pageCount:number;ratingsCount:number;imageLink:string;previewLink:string} []=[]
  constructor() {}


}
