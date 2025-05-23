import { Injectable } from '@angular/core';
import { Project } from './interfaces/project.interface'

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  menuIsOpen: boolean = false;
  menuToggle: boolean = false;
  isEN: boolean = false;
  isColored: boolean = false;
  isBlack: boolean = false;
  atImprint: boolean = false;
  mainContentHeight: number = 0;
  footerHeight: number = 0;

  isOpen: boolean = false;
  index: number = 0;

  mail: string = 'mail@annafritz.dev';

  project: Project[] = [
    {
      start: 0,
      id: 1,
      name: "Videoflix",
      descriptionEN: "Videoflix is a streaming platform with functions such as categories, video preview and video player",
      descriptionDE: "Videoflix ist eine Streamingplattform mit Funktionen wie Kategorien, Videopreview und Videoplayer",
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
          icon: 'assets/icons/project_skills_backend/django.svg',
          name: 'Django',
          separator: '|'
        },
        {
          icon: 'assets/icons/project_skills_backend/python.svg',
          name: 'Python', 
          separator: '|'
        },
        {
          icon: 'assets/icons/project_skills_backend/postgresql.svg',
          name: 'PostgreSQL',
          separator: '|'
        },
        {
          icon: 'assets/icons/project_skills_backend/docker.svg',
          name: 'Docker'
        }
      ],
      stacklevel: 'Fullstack',
      githubSrc: 'https://github.com/Anna-Fritz/videoflix',
      githubSrcBackend: 'https://github.com/Anna-Fritz/videoflix_backend',
      liveTestSrc: 'https://annafritz.de/videoflix',
      img: 'assets/img/videoflix-proto.png',
    },
  
    {
    start: 0,
    id: 2,
    name: "Coderr",
    descriptionEN: "A platform for freelance developers to offer services and manage their availability. Clients can book offers and leave reviews – guest access available for both roles.",
    descriptionDE: "Eine Plattform für Freelancer-Entwickler:innen, auf der sie nach Registrierung Dienstleistungen anbieten und deren Status verwalten können. Kund:innen können diese Angebote buchen und Bewertungen abgeben – auch per Gastzugang testbar.",
    skills: [
      {
        icon: 'assets/icons/project_skills_backend/django.svg',
        name: 'Django',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills_backend/python.svg',
        name: 'Python', 
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills_backend/sql.svg',
        name: 'SQL',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills_backend/docker.svg',
        name: 'Docker'
      }
    ],
    stacklevel: 'Backend',
    githubSrc: 'https://github.com/Anna-Fritz/coder-backend',
    githubSrcBackend: '',
    liveTestSrc: 'https://annafritz.de/coderr',
    img: 'assets/img/coderr.gif',
  },
  {
    start: 0,
    id: 3,
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
        icon: 'assets/icons/project_skills/sass.svg',
        name: 'SCSS',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/html.svg',
        name: 'HTML'
      }
    ],
    stacklevel: 'Frontend',
    githubSrc: 'https://github.com/Anna-Fritz/portfolio',
    githubSrcBackend: '',
    liveTestSrc: 'https://annafritz.de',
    img: 'assets/img/Portfolio2.gif',
  },
  {
    start: 0,
    id: 4,
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
    stacklevel: 'Frontend',
    githubSrc: 'https://github.com/Anna-Fritz/El_pollo_loco',
    githubSrcBackend: '',
    liveTestSrc: 'https://annafritz.de/el_pollo_loco',
    img: 'assets/img/el_pollo_loco.gif',
  },
  {
    start: 0,
    id: 5,
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
        icon: 'assets/icons/project_skills_backend/python.svg',
        name: 'Python',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills_backend/django.svg',
        name: 'Django',
        separator: '|'
      },
      {
        icon: 'assets/icons/project_skills/scrum.svg',
        name: 'Scrum'
      }
    ],
    stacklevel: 'Fullstack',
    githubSrc: 'https://github.com/Anna-Fritz/JOIN_Kanban_board',
    githubSrcBackend: 'https://github.com/Anna-Fritz/join_backend',
    liveTestSrc: 'https://annafritz.de/join',
    img: 'assets/img/join.gif',
  },
  {
    start: 0,
    id: 6,
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
    stacklevel: 'Frontend',
    githubSrc: 'https://github.com/Anna-Fritz/pokedex',
    githubSrcBackend: '',
    liveTestSrc: 'https://annafritz.de/pokedex',
    img: 'assets/img/pokedex.gif',
  }
];

/**
 * Toggles the state of the menu between open and closed
 */
  toggleMenu() {
    if(this.menuIsOpen) {
      this.menuIsOpen = false;
    } else {
      this.menuIsOpen = true;
    }
  }

  /**
   * Closes the menu
   */
  closeMenu() {
    this.menuIsOpen = false;
    this.menuToggle = false;
  }

  /**
   * reset black colored bg of the navbar
   */
  resetNavbarColor() {
    this.isBlack = false;
  }

  /**
   * colors bg of navbar in black
   */
  setNavbarBlack() {
    this.isBlack = true;  
  }

}