import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../projectdata.service';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  constructor() {
  }

}
