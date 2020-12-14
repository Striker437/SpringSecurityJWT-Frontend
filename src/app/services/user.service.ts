import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }



  getuser() {

    return this.httpClient.get('http://localhost:8080/hello')

  }

 
}
