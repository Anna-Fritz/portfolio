import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectdataService } from '../../projectdata.service';

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

  project = inject(ProjectdataService);

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

