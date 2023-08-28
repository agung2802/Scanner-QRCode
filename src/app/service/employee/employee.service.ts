import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://dummy.restapiexample.com/api/v1/'
  getAllEmployee(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}employees`).pipe(
      map(res => {
        const result = res;
        return result;
      }));
  }

  getEmployee(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}employee/${id}`).pipe(
      map(res => {
        return res;
      })
    )
  }

  deleteEmployee(id: any): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}delete/${id}`).pipe(
      map(res => {
        return res;
      })
    )
  }

}
