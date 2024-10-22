import { Component, inject, Renderer2} from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectdataService } from '../../projectdata.service';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  constructor(private renderer: Renderer2) {}

  openPopup(index: number) {
    this.projectdata.isOpen = true;
    this.projectdata.index = index;
    this.renderer.addClass(document.body, 'no-scroll');
  }

}