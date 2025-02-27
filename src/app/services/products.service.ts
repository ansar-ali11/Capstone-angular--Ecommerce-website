import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private url="http://localhost:8083/api/p1/insert2";
private url2="http://localhost:8083/api/p1/getall";
private url3="http://localhost:8083/api/p1/search";
  constructor(private http:HttpClient) { }

  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.url2}`);
  }

  add(records : Product):Observable<any>{
    return this.http.post<any>(`${this.url}`,records);
  }

  getByName(productname: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url3}?productname=${productname}`);
  }


}
