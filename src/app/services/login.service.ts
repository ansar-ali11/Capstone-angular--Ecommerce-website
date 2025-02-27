import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="http://localhost:8083/api/v1/";
  private url2="http://localhost:8083/api/v2/";
constructor(private http:HttpClient){}

getbyemail(email : string):Observable<Register>
{
  return this.http.get<Register>(`${this.url}getbyemail/${email}`);
}

getbyemail2(email :string):Observable<Admin>{
  return this.http.get<Admin>(`${this.url2}getbyemail/${email}`);
}
}

