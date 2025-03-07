import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IRequest, IRequests } from '../../common/models/base.model';
import { REQUEST_DATA, REQUESTS_DATA } from './requests.mocks';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  http = inject(HttpClient);

  getRequests(): Observable<IRequests[]> {
    /*
    return this.http.get<IEmail[]>('')
     */
    return of(REQUESTS_DATA)
  }

  getRequest(id: string): Observable<IRequest[]> {
    /*
    return this.http.get<IEmail>(`/${id}`);
     */
    return of(REQUEST_DATA);
  }
}
