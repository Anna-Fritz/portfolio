import { Component, inject, Renderer2 } from '@angular/core';
import { ProjectdataService } from '../../../services/projectdata.service';
import { TranslationService } from '../../../services/translation.service';
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

  constructor(private renderer: Renderer2) {}

  /**
   * closes popup & remove class for no-scroll ability
   */
  closePopup() {
    this.projectdata.isOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  /**
   * updates the current project index to show the next project in a list
   * @param index 
   */
  showNextProject(index: number) {
    if(index == this.projectdata.project.length - 1) {
      this.projectdata.index = 0;
    } else {
      this.projectdata.index = index + 1;
    }
  }
}
