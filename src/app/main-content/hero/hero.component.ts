import { Component, inject, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../projectdata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  projectdata = inject(ProjectdataService)
  translate = inject(TranslationService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 150) {
      this.projectdata.isColored = true;
    } else {
      this.projectdata.isColored = false;
    }
  }

  ngOnInit(): void {
    this.projectdata.atImprint = false;
  }

  resetNavbarColor() {
    this.projectdata.isBlack = false;
  }

}
