import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:'',
    password:''
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log('form is submitted');
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!='' && this.credentials.password!=''))
    {
      console.log('we have to submit the form to server');
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>
        {
          //if token is successfuly generated
          console.log("successfully generated the token :",response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/dashboard";
        },
        error=>
        {
          //else error 
           console.log("error comes in generating the token :",error);
        }
        


      )
    }
    else{
      console.log('fields are empty');
    }
  }

}
