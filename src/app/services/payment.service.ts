import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private url="http://localhost:8083/api/v3/insert";
  constructor(private http:HttpClient) { }

  makePayment(paymentData : any):Observable<any>{
    return this.http.post(`${this.url}`,paymentData)
  }

}
