import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
formgroup!:FormGroup
  constructor(private fb:FormBuilder,private service:RegisterService,private router:Router) {
    this.formgroup
    =this.fb.group({
      name: ["",[Validators.required]],
      email : ["",[Validators.email,Validators.pattern]],
      password :["",[Validators.required]]
    })
   }

   ngOnInit(){
   return this.add();
  }

  add(){
    if(this.formgroup.valid)
      {
      this.service.adduser(this.formgroup.value).subscribe(data => {
        this.router.navigate(['/login']);
      })
     }
  }

}
