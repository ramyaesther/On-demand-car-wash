import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { WashPacks } from 'src/app/models/WashPacks';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RequestBaseService } from 'src/app/services/request-base.service';
import { environment } from 'src/environments/environment';

const API_URL_2 = environment.BASE_URL_ORDER;
const API_URL_7 = environment.BASE_URL_WASHPACKS;

@Injectable({
  providedIn: 'root',
})
export class WasherService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getUnassignedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL_2 + '/findUnassigned', {
      headers: this.getHeaders,
    });
  }
  updatecompleteOrder(orderId: string): Observable<Object> {
    return this.http.put(API_URL_2+ '/updateStatus/' + orderId, {
      headers: this.getHeaders,
    });
  }
  myOrders(orderId: string): Observable<Object> {
    return this.http.put(API_URL_2+ '/findall/', {
      headers: this.getHeaders,
    });
  }
  getWPs(): Observable<WashPacks[]> {
    return this.http.get<WashPacks[]>(API_URL_7 + '/findallWP', {
      headers: this.getHeaders,
    });
  }
  getRatings(): Observable<WashPacks[]> {
    return this.http.get<WashPacks[]>(API_URL_7 + '/getallRatings', {
      headers: this.getHeaders,
    });
  }
}
