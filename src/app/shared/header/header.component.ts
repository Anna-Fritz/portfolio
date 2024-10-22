import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectdataService } from '../../projectdata.service';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  project = inject(ProjectdataService);
  translate = inject(TranslationService);

  // constructor(private router: Router, private route: ActivatedRoute) {}
  
  // navigateToSection(section: string) {
  //   // Überprüfe, ob wir bereits in der MainComponent sind
  //   if (this.router.url.startsWith('/home')) {
  //     // Scroll direkt zum Fragment
  //     this.router.navigate([], { fragment: section });
  //   } else {
  //     // Navigiere zur MainComponent und zum Fragment
  //     this.router.navigate(['/home'], { fragment: section });
  //   }
  // }
}

