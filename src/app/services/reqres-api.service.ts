import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {

  constructor(private http: HttpClient) { }
  
  getList(page:number, perPage:number) :Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page + '&per_page=' + perPage);
  }
  
  getDetails(id:number) :Observable<any>{
    return this.http.get('https://reqres.in/api/users/' + id);
  }
}
