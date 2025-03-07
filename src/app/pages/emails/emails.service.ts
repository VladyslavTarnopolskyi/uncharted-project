import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmail } from '../../common/models/base.model';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  http = inject(HttpClient);

  getEmails(): Observable<IEmail[]> {
    return this.http.get<IEmail[]>('')
  }
}
