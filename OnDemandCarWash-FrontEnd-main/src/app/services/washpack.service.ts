import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminService } from '../entityServices/admin-service/admin.service';
import { HttpClient } from '@angular/common/http';
const API_URL3 = `${environment.BASE_URL_WASHER}`; 
@Injectable({
  providedIn: 'root'
})
export class WashpackService extends AdminService{
  constructor(adminService: AdminService, http: HttpClient) {
    super(adminService, http);
  }
  updatecompleteOrder(orderId: string): Observable<Object> {
    return this.http.put(API_URL3 + '/updateStatus/' + orderId, {
      headers: this.getHeaders,
    });
  }
}
