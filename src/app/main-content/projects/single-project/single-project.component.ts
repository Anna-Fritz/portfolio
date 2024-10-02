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


  project: Project = {
    start: 0,
    id: 1,
    name: "Join",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
    skills: [
      {
        icon: 'assets/icons/project_skills/javascript.svg',
        name: 'JavaScript'
      },
      {
        icon: 'assets/icons/project_skills/css.svg',
        name: 'CSS'
      },
      {
        icon: 'assets/icons/project_skills/html.svg',
        name: 'HTML'
      }
    ],
    githubSrc: 'https://',
    liveTestSrc: 'https://',
    img: 'assets/img/join.png',
  }

  closePopup() {
    this.projectdata.isOpen = false;
    this.project = this.projectdata.project[this.projectdata.index];
  }

}
