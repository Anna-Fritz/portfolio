import { Component, inject} from '@angular/core';
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


  openPopup(index: number, projectPopup: HTMLElement) {

  }

}