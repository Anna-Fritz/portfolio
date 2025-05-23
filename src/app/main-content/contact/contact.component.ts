import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ProjectdataService } from '../../services/projectdata.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  translate = inject(TranslationService);
  projectdata = inject(ProjectdataService);
  http = inject(HttpClient);

  isAccepted = true;
  isEmpty = false;

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
  sentSuccessfully = false;
  mailTest = false;

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

  /**
   * checks Agreement of privacy policy & empty Form, posts valid & submitted form
   * @param ngForm - contact form
   * @param checkbox - checkbox for privacy policy agreement
   * @param popup - hint for sent mail successfully
   */
  onSubmit(ngForm: NgForm, checkbox: HTMLInputElement, popup: HTMLDivElement) {
    this.checkAgreement(ngForm, checkbox);
    this.checkEmptyForm(ngForm);
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
      this.showSuccessPopup(popup);
      ngForm.resetForm();
    }
  }

  /**
   * prevent posting mail if form is valid, but privacy policy is not accepted
   * @param ngForm - contact form
   * @param checkbox - checkbox for privacy policy agreement
   */
  checkAgreement(ngForm: NgForm, checkbox: HTMLInputElement) {
    if (!checkbox.checked && ngForm.form.valid) {
      this.isAccepted = false;
    }
  }

  /**
   * if form is not valid, boolean 'isEmpty' initialize user hint for fill in form
   * @param ngForm - contact form
   */
  checkEmptyForm(ngForm: NgForm){
    if (!ngForm.form.valid) {
      this.isEmpty = true;
    }
  }

  /**
   * reveals inputfield after click on user hint
   * @param inputfield - input für name, mail or message
   */
  showInput(inputfield: HTMLElement) {
    inputfield.style.display = "block";
    this.isEmpty = false;
  }

  /**
   * updates the visual appearance of the policy checkbox based on its checked state
   * @param checkboxPolicy 
   * @param checkbox 
   */
  acceptPolicy(checkboxPolicy: HTMLElement, checkbox: HTMLInputElement) {
    if (checkbox.checked) {
      checkboxPolicy.style.filter = "none";
      this.isAccepted = true;
    } else {
      checkboxPolicy.style.filter = "drop-shadow(0px 0px 40px #3DCFB6";
      this.isAccepted = false;
    }
  }

  /**
   * displays a success popup by setting its position based on the screen width
   * @param popup 
   */
  showSuccessPopup(popup: HTMLDivElement) {
    this.sentSuccessfully = true;
    this.naming = this.contactData.name;
    if(window.screen.width > 1440) {
      setTimeout(() => {
        popup.style.left = "504px";
      }, 200);
      this.hidePopup(popup);
    } else if (window.screen.width < 942) {
      setTimeout(() => {
        popup.style.left = "30vw";
      }, 200);
      this.hidePopup(popup);
    } else {
      setTimeout(() => {
        popup.style.left = "35vw";
      }, 200);
      this.hidePopup(popup);
    }
  }

  /**
   * hides the popup by moving it out of view
   * @param popup 
   * @returns 
   */
  hidePopup(popup: HTMLDivElement) {
    setTimeout(() => {
      popup.style.left = "110%";
    }, 5000);
    return;
  }
}
