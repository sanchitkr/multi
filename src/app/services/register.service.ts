import { Injectable } from '@angular/core';
import { UserModel } from "../model/user-model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//import { create } from 'domain';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  userList: UserModel[];

  constructor(private http: HttpClient) {
    
   }

  userUrl:string="http://localhost:/9955"

  create(item:UserModel){
    let body= JSON.stringify(item);
    let httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }

    return this.http.post(this.userUrl,body,httpOptions);
  }
}
