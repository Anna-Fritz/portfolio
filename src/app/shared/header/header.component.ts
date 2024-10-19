import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectdataService } from '../../projectdata.service';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  project = inject(ProjectdataService);
  translate = inject(TranslationService);
  
}

