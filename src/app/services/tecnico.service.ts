import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Tecnico } from '../models/tecnico';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

// Now you can use Observable in your code



@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  baseUrl: string = environment.baseURL;
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }

  findAll(): Observable<Tecnico[]> {
    const url = this.baseUrl + "/tecnicos";
    return this.http.get<Tecnico[]>(url);

  }

  findById(id: any): Observable<Tecnico> {
    const url = this.baseUrl + "/tecnicos/" + id;
    return this.http.get<Tecnico>(url);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    const url = this.baseUrl + "/tecnicos/" + tecnico.id;
    return this.http.put<Tecnico>(url, tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    const url = this.baseUrl + "/tecnicos";
    return this.http.post<Tecnico>(url, tecnico);
  }

  message(message: string): void {
    this.snack.open(`${message}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }
}
