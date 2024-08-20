import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrl: './manageaddress.component.css'
})
export class ManageaddressComponent implements OnInit {

  ngOnInit() {
    
  }

  onSubmit(form : FormControl){

    console.log(form.value);

  }

}