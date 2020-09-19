import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-registerform',
  templateUrl: './studentregform.component.html',
  styleUrls: ['./studentregform.component.css']
})
export class RegistreComponent implements OnInit {

  form : FormGroup
  user: User[] =[]
 
  register()
  {
    
  console.log(this.form.value)
  this.dataService.saveData(this.form.value).subscribe((res)=>{
    console.log("data added ", res);
    alert("data saved")
    this.router.nevigetByUrl("/")
  })
  }
  constructor() { }
  
  ngOnInit(): void {
    
    this.form = new FormGroup(
      {
      user_name:new FormControl(""),
      user_email:new FormControl(""),
      user_age:new FormControl(""),
      
    })
 
  }

}
