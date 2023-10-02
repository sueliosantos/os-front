import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OS } from '../models/os';


// Now you can use Observable in your code

@Injectable({
  providedIn: 'root'
})
export class OSService {
  baseUrl: string = environment.baseURL;
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }

  findAll(): Observable<OS[]> {
    const url = this.baseUrl + "/os";
    return this.http.get<OS[]>(url);

  }

  findById(id: any): Observable<OS> {
    const url = this.baseUrl + "/os/" + id;
    return this.http.get<OS>(url);
  }

  create(os: OS): Observable<OS> {
    const url = this.baseUrl + "/os";
    return this.http.post<OS>(url, os);
  }

  update(os: OS): Observable<OS> {
    const url = `${this.baseUrl}/os`
    return this.http.put<OS>(url, os);
  }

  delete(id: any): Observable<void> {
    const url = this.baseUrl + "/os/" + id;
    return this.http.delete<void>(url);
  }

  message(message: string): void {
    this.snack.open(`${message}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }
}
