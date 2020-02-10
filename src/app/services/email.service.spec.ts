import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { EmailContent } from '../interfaces/email-content';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('EmailService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: EmailService;

  const validFormInput: EmailContent = {
    name: 'Name',
    email: 'Email@email.com',
    subject: 'Subject',
    content: 'Content'
  };

  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }));

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can load github user repo data', () => {
    service.sendEmail(validFormInput).subscribe(data => {
      expect(data).toEqual(true);
    });

    const req = httpTestingController.expectOne('https://pure-bayou-73796.herokuapp.com/api/email/send');

    expect(req.request.method).toEqual('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
