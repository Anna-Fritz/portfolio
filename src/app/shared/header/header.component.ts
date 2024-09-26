import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currantLanguage = 'DE';
  toggleDirection = 'right';

  toggleLanguage() {
    if (this.currantLanguage == 'DE') {
      this.currantLanguage = 'EN';
      this.toggleDirection = 'left';
    } else {
      this.currantLanguage = 'DE';
      this.toggleDirection = 'right';
    }
  }
  
}

