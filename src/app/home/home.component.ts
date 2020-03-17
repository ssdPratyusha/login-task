import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import{FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LoginForm: any;
  submitted: boolean;
  constructor(private fm:FormBuilder ,private router:Router ) { 
  this.LoginForm=this.fm.group({
    UserName:['',Validators.required ],
  password:['', [Validators.required,  Validators.minLength(6)]],
})
}
newChange(): void {
  this.router.navigateByUrl('dashboard');
}
get f() { return this.LoginForm.controls; }
ngOnInit() {
 
}
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.LoginForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.LoginForm.value))

}
}


 


