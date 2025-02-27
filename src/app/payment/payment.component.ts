import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
paymentForm!:FormGroup;

constructor(private http:HttpClient,private fb:FormBuilder,private service:PaymentService,private router:Router){
  this.paymentForm = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    expiryDate: ['', Validators.required],
    cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    amount: ['', Validators.required]
  });
}


ngOnInit(){
return this.makePayment();
}


makePayment(){
  if(this.paymentForm.valid){
    this.service.makePayment(this.paymentForm.value).subscribe(response => {
      alert("Payment is successful");
      this.router.navigate(['/membership']);
    },
  (error) => {
    alert("failed payment");
  })
  }
}

}
