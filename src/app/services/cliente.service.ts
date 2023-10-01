import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Tecnico } from '../models/tecnico';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../models/cliente';

// Now you can use Observable in your code



@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string = environment.baseURL;
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }

  findAll(): Observable<Cliente[]> {
    const url = this.baseUrl + "/clientes";
    return this.http.get<Cliente[]>(url);

  }

  findById(id: any): Observable<Cliente> {
    const url = this.baseUrl + "/clientes/" + id;
    return this.http.get<Cliente>(url);
  }

  create(cliente: Cliente): Observable<Cliente> {
    const url = this.baseUrl + "/clientes";
    return this.http.post<Cliente>(url, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = this.baseUrl + "/clientes/" + cliente.id;
    return this.http.put<Cliente>(url, cliente);
  }

  delete(id: any): Observable<void> {
    const url = this.baseUrl + "/clientes/" + id;
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
