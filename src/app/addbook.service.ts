import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddbookService {
  users:{ name: string; quantity: string; tag: string;image:string ;}[] = [];
  constructor() { }
  /* istanbul ignore next */
  addUser = (user :{ name: string; quantity: string; tag: string;image:string ;}) => {
    this.users.push(user)
  }
/* istanbul ignore next */
  getUsers = () => {
    return this.users;
  }
  
}

