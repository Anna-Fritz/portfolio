import { Component, inject } from '@angular/core';
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

  resetNavbarColor() {
    this.projectdata.isBlack = false;
  }

}
