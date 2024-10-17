import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectdataService } from '../../projectdata.service';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currantLanguage = 'DE';
  toggleDirection = 'right';

  project = inject(ProjectdataService);
  translate = inject(TranslationService);

  toggleLanguage() {
    if (this.currantLanguage == 'DE') {
      this.currantLanguage = 'EN';
      this.toggleDirection = 'left';
      this.project.isEN = true;
    } else {
      this.currantLanguage = 'DE';
      this.toggleDirection = 'right';
      this.project.isEN = false;
    }
  };
  
}

