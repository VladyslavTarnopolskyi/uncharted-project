import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IRequest, IRequests } from '../../common/models/base.model';
import { REQUEST_DATA } from './requests.mocks';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  http = inject(HttpClient);

  getRequests(): Observable<IRequests[]> {
    return this.http.get<IRequests[]>('http://127.0.0.1:8000/compensation_requests')
  }

  getRequest(id: string): Observable<IRequest[]> {
    /*
    return this.http.get<IRequest>(`/${id}`);
     */
    return of(REQUEST_DATA);
  }
}
