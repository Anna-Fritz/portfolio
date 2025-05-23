import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectdataService } from '../services/projectdata.service';
import { HeightService } from '../services/height.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent, HeroComponent, ProjectsComponent, ReferencesComponent, SkillsetComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit{
    @ViewChildren('section', { read: ElementRef }) sections!: QueryList<ElementRef>;

    totalHeight: number = 0;

    constructor(private subscribeService: ProjectdataService, private heightService: HeightService, private route: ActivatedRoute) {}
  
    /**
     * calculates & updates total height of all sections after the view initializes - plus subscribing to route fragments to smoothly scroll to a specified component
     */
    ngAfterViewInit() {
      setTimeout(() => {
        this.calculateTotalHeight();
        this.updateHeight();
        }, 0)
        this.route.fragment.subscribe(fragment => {
          if (fragment) {
            document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
          }
        });
    }

    /**
     * updates calculated height in height service
     */
    updateHeight() {
      const desiredHeight = this.totalHeight;
      this.heightService.setHeight(desiredHeight);
    }
    
    /**
     * calculates the total height of all sections on the page
     */
    calculateTotalHeight() {
      this.totalHeight = this.sections.reduce((acc, section: ElementRef) => {
        return acc + section.nativeElement.offsetHeight;
      }, 0) + this.subscribeService.footerHeight;
    }
}
