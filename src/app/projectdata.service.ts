import { Injectable } from '@angular/core';
import { Project } from './interfaces/project.interface'

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  isOpen: boolean = false;
  index: number = 0;

  project: Project[] = [
    {
    start: 0,
    id: 1,
    name: "Portfolio",
    description: "Presentation of me, my work & my exciting journey as Frontend Developer",
    skills: [
      {
        icon: 'assets/icons/project_skills/angular.svg',
        name: 'Angular'
      },
      {
        icon: 'assets/icons/project_skills/typescript.svg',
        name: 'TypeScript'
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
    img: 'assets/img/portfolio.png',
  },
  {
    start: 0,
    id: 2,
    name: "El Pollo Loco",
    description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
    skills: [
      {
        icon: 'assets/icons/project_skills/javascript.svg',
        name: 'JavaScript'
      },
      {
        icon: 'assets/icons/project_skills/html.svg',
        name: 'HTML'
      },
      {
        icon: 'assets/icons/project_skills/css.svg',
        name: 'CSS'
      }
    ],
    githubSrc: 'https://',
    liveTestSrc: 'https://',
    img: 'assets/img/el_pollo_loco.png',
  },
  {
    start: 0,
    id: 3,
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
      },
      {
        icon: 'assets/icons/project_skills/firebase.svg',
        name: 'Firebase'
      },
      {
        icon: 'assets/icons/project_skills/scrum.svg',
        name: 'Scrum'
      }
    ],
    githubSrc: 'https://',
    liveTestSrc: 'https://',
    img: 'assets/img/join.png',
  },
  {
    start: 0,
    id: 4,
    name: "Pokedex",
    description: "A Pokédex is a comprehensive digital encyclopedia that catalogues and provides detailed information about various Pokémon species, including their abilities, habitats, and evolutions.",
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
      },
      {
        icon: 'assets/icons/project_skills/api.svg',
        name: 'Rest-Api'
      }
    ],
    githubSrc: 'https://',
    liveTestSrc: 'https://',
    img: 'assets/img/pokedex.png',
  }
]

  constructor() { }

}