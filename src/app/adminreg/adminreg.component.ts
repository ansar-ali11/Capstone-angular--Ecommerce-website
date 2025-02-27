import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent {
formgroup!:FormGroup
  constructor(private fb:FormBuilder,private service:AdminService,private router:Router) {
    this.formgroup
    =this.fb.group({
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
        this.router.navigate(['/adminlogin']);
      })
     }
  }
}
