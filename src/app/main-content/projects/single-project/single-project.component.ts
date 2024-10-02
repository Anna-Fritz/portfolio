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

  showNextProject(index: number) {
    if(index == this.projectdata.project.length - 1) {
      this.projectdata.index = 0;
      console.log("index", index)
    } else {
      this.projectdata.index = index + 1;
      console.log("index", index)
    }
  }
}
