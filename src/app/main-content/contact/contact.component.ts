import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  translate = inject(TranslationService);
  http = inject(HttpClient);

  isAccepted = true;
  isEmpty = false;
  sentSuccessfully = false;

  contactData: {
    name: string,
    email: string,
    message: string
  } = {
    name: "",
    email: "",
    message: ""
  }

  naming = "";

  mailTest = true;

  post = {
    endPoint: 'https://annafritz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm, checkbox: HTMLInputElement, popup: HTMLDivElement) {
    if (!checkbox.checked && ngForm.form.valid) {
      this.isAccepted = false;
    }
    if (!ngForm.form.valid) {
      this.isEmpty = true;
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && checkbox.checked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showSuccessPopup(popup);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && checkbox.checked) {
      console.log("Hey!", this.naming);
      this.showSuccessPopup(popup);
      ngForm.resetForm();

    }
  }

  showInput(inputfield: HTMLElement) {
    inputfield.style.display = "block";
    this.isEmpty = false;
  }

  acceptPolicy(checkboxPolicy: HTMLElement, checkbox: HTMLInputElement, submitBtn: HTMLInputElement) {
    if (checkbox.checked) {
      checkboxPolicy.style.filter = "none";
      this.isAccepted = true;
    } else {
      checkboxPolicy.style.filter = "drop-shadow(0px 0px 40px #3DCFB6";
      this.isAccepted = false;
    }
  }

  showSuccessPopup(popup: HTMLDivElement) {
    this.sentSuccessfully = true;
    this.naming = this.contactData.name;
    if(window.screen.width > 1440) {
      setTimeout(() => {
        popup.style.left = "504px";
      }, 200);
      setTimeout(() => {
        popup.style.left = "1880px";
      }, 3000);
      return;  

    } else if (window.screen.width < 942) {
      setTimeout(() => {
        popup.style.left = "30vw";
      }, 200);
      setTimeout(() => {
        popup.style.left = "110%";
      }, 3000);      
      return;

    } else {
      setTimeout(() => {
        popup.style.left = "35vw";
      }, 200);
      setTimeout(() => {
        popup.style.left = "110%";
      }, 3000);
      return;
    }
  }
}
