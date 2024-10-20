import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../projectdata.service';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {

  translate = inject(TranslationService);
  projectdata = inject(ProjectdataService);
  
  skillIcons: {
    name: string,
    src: string
  } [] = [
    {
      name: 'JavaScript',
      src: 'assets/icons/skills/javascript.svg'
    },
    {
      name: 'HTML',
      src: 'assets/icons/skills/html.svg'
    },
    {
      name: 'CSS',
      src: 'assets/icons/skills/css.svg'
    },
    {
      name: 'Angular',
      src: 'assets/icons/skills/angular.svg'
    },
    {
      name: 'TypeScript',
      src: 'assets/icons/skills/typescript.svg'
    },
    {
      name: 'SASS/SCSS',
      src: 'assets/icons/skills/sass.svg'
    },
    {
      name: 'Firebase',
      src: 'assets/icons/skills/firebase.svg'
    },
    {
      name: 'Git',
      src: 'assets/icons/skills/git.svg'
    },
    {
      name: 'Rest-Api',
      src: 'assets/icons/skills/api.svg'
    },
    {
      name: 'Scrum',
      src: 'assets/icons/skills/scrum.svg'
    },
    {
      name: 'Material Design',
      src: 'assets/icons/skills/material_design.svg'
    },
    {
      name: 'Figma',
      src: 'assets/icons/skills/figma.svg'
    },
    {
      name: 'Bootstrap',
      src: 'assets/icons/skills/bootstrap.svg'
    },
  ];

}
