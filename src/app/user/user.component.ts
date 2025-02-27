
//import  $ from 'jquery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  @ViewChild('f') usersignup : NgForm;
  
   userdata: any;
  constructor( private http : HttpClient)
  {

  }
 
  ngOnInit() { }


  onSubmit(form : NgForm){
     this.userdata=form.value;
    console.log(form.value);
 
    // const headers = new HttpHeaders({'my-header':'hello world '})
    console.log(this.usersignup);
    console.log(this.userdata);
    this.http.post('http://localhost:8866/users',this.userdata).subscribe((response)=>{

   console.log(response)
    });

  }


  

  

}
