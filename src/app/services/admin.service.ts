import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private url="http://localhost:8083/api/v2/insert";
  constructor(private http:HttpClient) { }

 adduser(records : Admin):Observable<any>{
     return this.http.post<any>(`${this.url}`,records);
   }

   
}
