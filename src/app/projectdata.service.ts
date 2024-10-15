import { Injectable } from '@angular/core';
import { Project } from './interfaces/project.interface'

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  menuIsOpen: boolean = false;
  isEN: boolean = false;

  isOpen: boolean = false;
  index: number = 0;

  mail = 'mail@annafritz.dev';

  project: Project[] = [
    {
    start: 0,
    id: 1,
    name: "Portfolio",
    descriptionEN: "Presentation of me, my work & my exciting journey as Frontend Developer",
    descriptionDE: "Präsentation von mir, meiner Arbeit und meiner spannenden Reise als Web-Entwicklerin.",
    skills: [
      {
        icon: 'assets/icons/project_skills/angular.svg',
        name: 'Angular',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/typescript.svg',
        name: 'TypeScript', 
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/css.svg',
        name: 'CSS',
        separator: '|'
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
    descriptionEN: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
    descriptionDE: "Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.",
    skills: [
      {
        icon: 'assets/icons/project_skills/javascript.svg',
        name: 'JavaScript',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/html.svg',
        name: 'HTML',
        separator: '|'
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
    descriptionEN: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    descriptionDE: "Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
    skills: [
      {
        icon: 'assets/icons/project_skills/javascript.svg',
        name: 'JavaScript',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/css.svg',
        name: 'CSS',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/html.svg',
        name: 'HTML',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/firebase.svg',
        name: 'Firebase',
        separator: '|'
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
    descriptionEN: "A Pokédex is a comprehensive digital encyclopedia that catalogues and provides detailed information about various Pokémon species, including their abilities, habitats, and evolutions.",
    descriptionDE: "Ein Pokédex ist eine umfassende digitale Enzyklopädie, die detaillierte Informationen über verschiedene Pokémon-Arten katalogisiert und bereitstellt, einschließlich ihrer Fähigkeiten, Lebensräume und Entwicklungen.",
    skills: [
      {
        icon: 'assets/icons/project_skills/javascript.svg',
        name: 'Javascript',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/css.svg',
        name: 'CSS',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/html.svg',
        name: 'HTML',
        separator: '|'
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
];

  constructor() { }

   toggleMenu() {
    if(this.menuIsOpen) {
      this.menuIsOpen = false;
    } else {
      this.menuIsOpen = true;
    }
   }

}