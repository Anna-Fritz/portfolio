import { Component, inject, Renderer2 } from '@angular/core';
import { Project } from './../../../interfaces/project.interface'
import { ProjectdataService } from '../../../projectdata.service';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  constructor(private renderer: Renderer2) {
    
  }

  closePopup() {
    this.projectdata.isOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  showNextProject(index: number) {
    if(index == this.projectdata.project.length - 1) {
      this.projectdata.index = 0;
    } else {
      this.projectdata.index = index + 1;
    }
  }
}
