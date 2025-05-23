import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { TranslationService } from '../../services/translation.service';
import { AnimationService } from '../../services/animation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  animation = inject(AnimationService);

}

