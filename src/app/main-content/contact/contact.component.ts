import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  translate = inject(TranslationService);

  contactData: {
    name: string,
    email: string,
    message: string
  } = {
    name: "",
    email: "",
    message: ""
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  showInput(inputfield: HTMLElement) {
    inputfield.style.display = "block";

  }
}
