import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { EmailContent } from 'src/app/interfaces/email-content';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  });

  sendError = '';
  sendSuccess = false;

  constructor(private emailService: EmailService, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  getEmailErrorMessage() {
    const emailControl: AbstractControl = this.emailForm.controls.email;
    const requiredErrorString = 'Please enter an email.';
    const invalidErrorString = 'This email is not valid.';
    return emailControl.hasError('required') ? requiredErrorString : emailControl.hasError('email') ? invalidErrorString : '';
  }

  sendEmail() {
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }
    const content: EmailContent = this.emailForm.value as EmailContent;
    this.emailService
      .sendEmail(content)
      .subscribe(() => this.successfulEmail(), () => (this.sendError = 'There was an error sending the message'));
  }

  successfulEmail() {
    this.emailForm.reset();
    this.snackBar.open('Message sent, I\'ll be in touch!', '', { duration: 2500 });
  }
}
