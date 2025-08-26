import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  NgForm,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('📝 Contact Form Data:', this.contactForm.value);
      alert('✅ Message Sent! (Check console)');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }


  sendEmail(form: NgForm) {
    if (form.invalid) return;

    const time =
      new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }) + ' IST';

    emailjs
      .send(
        'service_le9239l',
        'template_iifgxrx',
        {
          from_name: form.value.from_name,
          reply_to: form.value.reply_to,
          subject: form.value.subject,
          message: form.value.message,
          time,
          year: new Date().getFullYear(),
        },
        'bFISrbAFWYLobQgG3'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.text);
          this.showToast('successToast');
          form.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          this.showToast('errorToast');
        }
      );
  }

  private showToast(toastId: string) {
    const toastEl = document.getElementById(toastId);
    if (toastEl) {
      // ✅ Use Toast class instead of bootstrap.Toast
      const toast = new Toast(toastEl);
      toast.show();
    }
  }

}
