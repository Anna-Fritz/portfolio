import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  
  skillIcons: {
    name: string,
    src: string
  } [] = [
    {
      name: 'HTML',
      src: './../../../assets/icons/skills/html.svg'
    },
    {
      name: 'CSS',
      src: './../../../assets/icons/skills/css.svg'
    },
    {
      name: 'JavaScript',
      src: './../../../assets/icons/skills/javascript.svg'
    },
    {
      name: 'Material Design',
      src: './../../../assets/icons/skills/material_design.svg'
    },
    {
      name: 'TypeScript',
      src: './../../../assets/icons/skills/typescript.svg'
    },
    {
      name: 'Angular',
      src: './../../../assets/icons/skills/angular.svg'
    },
    {
      name: 'Firebase',
      src: './../../../assets/icons/skills/firebase.svg'
    },
    {
      name: 'Git',
      src: './../../../assets/icons/skills/git.svg'
    },
    {
      name: 'Rest-Api',
      src: './../../../assets/icons/skills/api.svg'
    },
    {
      name: 'Scrum',
      src: './../../../assets/icons/skills/scrum.svg'
    },
    {
      name: 'Growth Mindset',
      src: './../../../assets/icons/skills/growth_mindset.svg'
    },
    {
      name: 'Challenge me',
      src: './../../../assets/icons/skills/challenge_me.svg'
    }
  ]

}
