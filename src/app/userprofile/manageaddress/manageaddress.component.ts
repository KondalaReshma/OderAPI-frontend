import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
 import { FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrl: './manageaddress.component.css'
})
export class ManageaddressComponent implements OnInit {


  @ViewChild('f') address : NgForm;
  addressdata : any;

  ngOnInit() {  }
  constructor( private http :HttpClient ){ }

  onSubmit(form : NgForm){

    this.addressdata = form.value;
    this.http.post('http://localhost:8866/address/8',this.addressdata).subscribe((response)=>{console.log(response)});

    console.log(form.value);

  }

}