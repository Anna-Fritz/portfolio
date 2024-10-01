import { Component } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  project: {
    start: number,
    id: number,
    name: string,
    description: string,
    skills: { icon: string, name: string }[],
    githubSrc: string,
    liveTestSrc: string,
    img: string,
  } = {
    start: 0,
    id: 1,
    name: "Join",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
    skills: [
      {
        icon: 'assets/icons/project_skills/javascript.svg',
        name: 'Javascript'
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
    img: 'portfolio/src/assets/img/join.png',
  }
}
