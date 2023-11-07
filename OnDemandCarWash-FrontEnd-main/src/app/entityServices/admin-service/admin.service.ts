import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestBaseService } from 'src/app/services/request-base.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WashPacks } from 'src/app/models/WashPacks';
import { Order } from 'src/app/models/Order';

const API_URL_7 = environment.BASE_URL_WASHPACKS;
const API_URL_ORDER =environment.BASE_URL_ORDER

@Injectable({
  providedIn: 'root',
})
export class AdminService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getAllWP(): Observable<WashPacks[]> {
    return this.http.get<WashPacks[]>(API_URL_7 + '/findallWP', {
      headers: this.getHeaders,
    });
  }
  getOneWP(id: string): Observable<WashPacks>{
    return this.http.get<WashPacks>(API_URL_7 + '/findoneWP/' + id, {
      headers: this.getHeaders,
    });
  }
  addWashPack(wp: WashPacks): Observable<Object> {
    return this.http.post(API_URL_7 + '/addWP', wp, {
      headers: this.getHeaders,
    });
  }
  delWashPack(id: string): Observable<Object> {
    return this.http.delete(API_URL_7 + '/deleteWP/'+id , {
      headers: this.getHeaders,
    });
  }
  addOrder(order: Order): Observable<Object> {
    return this.http.post( API_URL_ORDER+ '/addOrder', order, {
      headers: this.getHeaders,
    });
  }
  updateWP(id: string,wp: WashPacks): Observable<Object>{
    return this.http.put(API_URL_7 + '/updateWP/'+id,{
      headers: this.getHeaders,
    });
  }
  
}
