import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
    private url = 'http://localhost:3000/api';

    constructor(
      protected http: HttpClient,
      private router: Router
    ) {}

    sendMail(email: string, nombre: string, apellido: string, asunto: string, mensaje: string): Observable<Response> {
      return this.http.post<any>(`${this.url}/sendMail`, { email, nombre, apellido, asunto, mensaje });
    }
}
