import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import { Storage } from '@ionic/storage-angular';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodService {

  public baseUrl: string;
  constructor(private http: HttpClient, private storage: Storage) {
    this.baseUrl = environment.urlBase;
  }

  async get<T>(url: string, data: any = {}) {
    if (data) {
      data.format = 'json';
    } else {
      data = {};
      data.format = 'json';
    }
    return await firstValueFrom(this.http.get<T>(this.baseUrl + url, {headers: await this.header(), params: data}));
  }

  async post<T>(url: string, data: any) {
    return await firstValueFrom(this.http.post<T>(this.baseUrl + url, data, {headers: await this.header()}));
  }

  async put<T>(url: string, data: any) {
    return await firstValueFrom(this.http.put<T>(this.baseUrl + url, data, {headers: await this.header()}));
  }

  async delete<T>(url: string) {
    return await firstValueFrom(this.http.delete<T>(this.baseUrl + url, {headers: await this.header()}));
  }

  private async header() {
    const token = await this.storage.get('token');
    let headers = new HttpHeaders();
    if (token) {        
        headers = headers.append('Authorization', 'Bearer ' + token.access_token);
        headers = headers.append('Content-Type', 'application/json');
        return headers;
    }
    headers = headers.append('Content-Type', 'application/json');
    return ;
  }

}
