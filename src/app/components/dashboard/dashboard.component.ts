import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:any
  constructor(private httpClient:HttpClient,
              private userService:UserService) { }

  ngOnInit(): void {
  }


  getuser()
  {
    this.userService.getuser().subscribe(
      user=>
      {
       console.log(user)
       this.user=user
      },

      error=>
      {
        console.log('error comes in setting the madarchod header')
console.log(error)
      }
      
    )

  }

}
