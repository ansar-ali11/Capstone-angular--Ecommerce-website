import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
 formgroup!:FormGroup
  constructor(private fb:FormBuilder,private service:LoginService,private router:Router) {
    this.formgroup
    =this.fb.group({
      email : ["",[Validators.email]],
      password :["",[Validators.required]]
    })
   }

   onsubmit() {
    if (this.formgroup.valid) {
      const email = this.formgroup.value.email;
      const password = this.formgroup.value.password;
  
      // Call the service to get employee data by email
      this.service.getbyemail2(email).subscribe(
        data => {
          console.log(data);
          if (!data) {
            alert('Employee not found!');
            return;
          }
  
          // Check if the employee exists and if password matches
          if (data.password === password) {
            this.router.navigate(['/admin']);
          } else {
            alert('Invalid email or password!');
          }
        },
        error => {
          console.error('Login failed', error);
          alert('An error occurred. Please try again later.');
        }
      );
    } else {
      alert('Please enter valid email and password.');
    }
  }
  
}
