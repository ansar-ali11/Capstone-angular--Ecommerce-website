import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url="http://localhost:8083/api/v1/insert";
  constructor(private http:HttpClient) { }

  adduser(records : Register):Observable<any>{
    return this.http.post<any>(`${this.url}`,records);
  }


}
