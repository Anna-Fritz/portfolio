import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { HeroComponent } from './hero/hero.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent, HeroComponent, ProjectsComponent, ReferencesComponent, SkillsetComponent, SingleProjectComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
