import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailContent } from '../interfaces/email-content';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(content: EmailContent): Observable<boolean> {
    const backendUrl = environment.email;
    const endpoint = backendUrl + '/api/email/send';
    return this.http.post<boolean>(endpoint, content).pipe(take(1));
  }
}
