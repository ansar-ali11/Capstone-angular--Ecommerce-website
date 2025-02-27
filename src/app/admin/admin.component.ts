import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  formgroup!:FormGroup
constructor(private service:ProductsService,private fb:FormBuilder){
 
  this.formgroup=this.fb.group({
    productname : ["",[Validators.required]],
    productdescription : ["",[Validators.required]],
    price : ["",[Validators.required]],
    productstock : ["",[Validators.required]],
    src : ["",[Validators.required]],
    category:["",[Validators.required]]
  })
}


ngOnInit(){
return this.onclick();
}

onclick(){
  if(this.formgroup.valid)
  {
     this.service.add(this.formgroup.value).subscribe(data => {
      alert("Product added successfully");
    })
  }
}
}
