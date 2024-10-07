import { Component, inject, Renderer2} from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectdataService } from '../../projectdata.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectdata = inject(ProjectdataService);

  constructor(private renderer: Renderer2) {
    
  }


  openPopup(index: number) {
    this.projectdata.isOpen = true;
    this.projectdata.index = index;
    this.renderer.addClass(document.body, 'no-scroll');
  }

}