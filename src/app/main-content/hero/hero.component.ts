import { Component, inject, HostListener } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../projectdata.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  projectdata = inject(ProjectdataService)
  translate = inject(TranslationService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Überprüfe die Scroll-Position und führe deine Logik aus
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 150) {
      this.projectdata.isColored = true;
    } else {
      this.projectdata.isColored = false;
    }
  }

  resetNavbarColor() {
    this.projectdata.isBlack = false;
  }

}
