import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  encryptdata(request){
    let url = `${this.baseUrl}orders/encryptFormData`;
    let data = {
    request : request
    }
    return this.http.get(url,{params:data})
  }
}
