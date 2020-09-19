import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  intputType:string='password';
  input:string='text';
  login:any=[]


  getSignupData(){
    this.dataService.getData().subscribe((res)=>{
      this.login=res;
    })
  }
  constructor(private dataService:DataService){}
  

  ngOnInit(): void {
    this.getSignupData();
  }
  show(){
    if(this.intputType=='password'){
      this.intputType='text';
    }
    else
     this.intputType='password';
  }
  }
  