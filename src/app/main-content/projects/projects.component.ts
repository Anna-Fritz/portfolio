import { Component, inject, Renderer2} from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectdataService } from '../../services/projectdata.service';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  constructor(private renderer: Renderer2) {}

  /**
   * opens popup and add no-scroll attribute to body
   * @param index 
   */
  openPopup(index: number) {
    this.projectdata.isOpen = true;
    this.projectdata.index = index;
    this.renderer.addClass(document.body, 'no-scroll');
  }

}