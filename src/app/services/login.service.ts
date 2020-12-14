import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  

  constructor(private httpClient:HttpClient) { }


   //calling the server to generate the token

  generateToken(credentials)
  {
    //token generate
    return this.httpClient.post('http://localhost:8080/token',credentials);
  }



 


  //for login user

  loginUser(token)
  {

    localStorage.setItem("token",token);
    return true;

  }


  //to check that user is logged in
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==null || token=='')
    return false;

    else
    return true;
  }


  //for logout the user
  logout()
  {
    localStorage.removeItem("token");
    return true;
  }


  //get the token
   getToken()
   {
     return localStorage.getItem('token')
   }

//   public getToken() {
//     const currentUser = JSON.parse(localStorage.getItem('token') || '{}');
//     console.log("GET TOKEN VALUE ", currentUser.ticket);          ///done for debugging
//     return currentUser.ticket;
// }
}
