import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [TranslateModule, RouterLink, NgClass],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {

  translate = inject(TranslationService);
  projectdata = inject(ProjectdataService);

  stackFrontend = true;
  stackBackend = false;
  
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

  skillIconsBackend: {
    name: string,
    src: string
  } [] = [
    {
      name: 'Python',
      src: 'assets/icons/skills_backend/python.svg'
    },
    {
      name: 'Django',
      src: 'assets/icons/skills_backend/django.svg'
    },
    // {
    //   name: 'DRF',
    //   src: 'assets/icons/skills_backend/drf.svg'
    // },
    {
      name: 'Docker',
      src: 'assets/icons/skills_backend/docker.svg'
    },
    {
      name: 'SQL',
      src: 'assets/icons/skills_backend/sql.svg'
    },
    {
      name: 'Linux',
      src: 'assets/icons/skills_backend/linux.svg'
    },
    {
      name: 'Postman',
      src: 'assets/icons/skills_backend/postman.svg'
    }
  ];

  toggleStackIcons() {
    if (!this.stackFrontend == true) {
      this.stackFrontend = true;
      this.stackBackend = false;
    } 
    else {
      this.stackFrontend = false;
      this.stackBackend = true;
    }
  }

  showFrontendIcons() {
    if (!this.stackFrontend == true) {
      this.stackFrontend = true;
      this.stackBackend = false;
    } 
    // else {
    //   this.stackFrontend = false;
    //   this.stackBackend = true;
    // }
  }

  showBackendIcons() {
    if (this.stackFrontend == true) {
      this.stackFrontend = false;
      this.stackBackend = true;
    } 
    // else {
    //   this.stackFrontend = true;
    //   this.stackBackend = false;
    // }
  }

}
