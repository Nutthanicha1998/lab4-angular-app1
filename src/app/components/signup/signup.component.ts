import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,FormArray, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profileForm = new FormGroup({
    title: new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    studentID : new FormControl('',[Validators.required, Validators.pattern('B[0-9]{7}')]),
    sex: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormGroup({
      stree: new FormControl(''),
      city: new FormControl(""),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  });
  get email(){
    return this.profileForm.get('email');
  }
  get studentID(){
    return this.profileForm.get('studentID');
  }
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addAliases(){
    this.aliases.push(new FormControl(''));
  }

}
