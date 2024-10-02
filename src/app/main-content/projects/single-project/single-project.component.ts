import { Component, inject } from '@angular/core';
import { Project } from './../../../interfaces/project.interface'
import { ProjectdataService } from '../../../projectdata.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  projectdata = inject(ProjectdataService);

  closePopup() {
    this.projectdata.isOpen = false;
  }
}
