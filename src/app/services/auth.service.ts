import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { IAuthToken } from '../common/interfaces/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}


    async login(username: string, password: string) {
      try {
        const _url = environment.urlBase + '/o/token/';
  
        let body = new HttpParams();
    
        body = body.append('grant_type', 'password');
        body = body.append('username', username);
        body = body.append('password', password);
        body = body.append('client_id', environment.clientId);
        body = body.append('client_secret', environment.clientSecret);
    
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        const suscription =  this.http.post<IAuthToken>(_url, body, { headers });
        const data = await firstValueFrom(suscription)  
        return data;
      } catch (error) {
        console.log({error})
        throw error;
      }
    }

}
