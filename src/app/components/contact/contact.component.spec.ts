import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { EmailContent } from 'src/app/interfaces/email-content';
import { EmailService } from 'src/app/services/email.service';
import { of, throwError } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const validFormInput: EmailContent = {
  name: 'Name',
  email: 'Email@email.com',
  subject: 'Subject',
  content: 'Content'
};

const invalidFormInput: EmailContent = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  content: 'Content'
};

describe('ContactComponent - success', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  jasmine.getEnv().allowRespy(true);

  const emailServiceStub = jasmine.createSpyObj('EmailService', ['sendEmail']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [{ provide: EmailService, useValue: emailServiceStub }],
      imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSnackBarModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(emailServiceStub, 'sendEmail').and.returnValue(of(true));
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully submit a contact request', () => {
    component.emailForm.setValue(validFormInput);
    component.sendEmail();
    expect(emailServiceStub.sendEmail).toHaveBeenCalledWith(validFormInput);
  });

  it('should successfully reset form after submit a contact request', () => {
    component.emailForm.setValue(validFormInput);
    component.successfulEmail();
    expect(component.emailForm.invalid).toBeTruthy();
  });

  it('should show an error message if invalid response', () => {
    component.emailForm.setValue(validFormInput);
    component.sendEmail();
    expect(emailServiceStub.sendEmail).toHaveBeenCalled();
    expect(component.sendError).toEqual('');
  });

  it('should get email errors for no error', () => {
    component.emailForm.setValue(validFormInput);
    expect(component.getEmailErrorMessage()).toEqual('');
  });

  it('should set errors from error response', () => {
    spyOn(emailServiceStub, 'sendEmail').and.returnValue(throwError(''));
    component.emailForm.setValue(validFormInput);
    component.sendEmail();
    expect(component.sendError).toEqual('There was an error sending the message');
  });
});

describe('ContactComponent - fail', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  jasmine.getEnv().allowRespy(true);

  const emailServiceStub = jasmine.createSpyObj('EmailService', ['sendEmail']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [{ provide: EmailService, useValue: emailServiceStub }],
      imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSnackBarModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(emailServiceStub, 'sendEmail').and.returnValue(of(false));
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit a contact request if invalid', () => {
    component.emailForm.setValue(invalidFormInput);
    component.sendEmail();
    expect(emailServiceStub.sendEmail).not.toHaveBeenCalled();
  });

  it('should get email errors', () => {
    component.emailForm.setValue(invalidFormInput);
    expect(component.getEmailErrorMessage()).toEqual('This email is not valid.');
  });
});
