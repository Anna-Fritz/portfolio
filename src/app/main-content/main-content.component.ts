import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, Output, EventEmitter } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from "../shared/header/header.component";
import { ProjectdataService } from '../projectdata.service';
import { HeightService } from '../height.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent, HeroComponent, ProjectsComponent, ReferencesComponent, SkillsetComponent, HeaderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {
    @ViewChildren('section', { read: ElementRef }) sections!: QueryList<ElementRef>;

    totalHeight: number = 0;

    constructor(private subscribeService: ProjectdataService, private heightService: HeightService) {}

    ngAfterViewInit() {
      setTimeout(() => {
        this.calculateTotalHeight();
        this.updateHeight();
        }, 0)
    }

    updateHeight() {
      const desiredHeight = this.totalHeight; // Beispielhöhe, du kannst hier die tatsächliche Höhe berechnen
      this.heightService.setHeight(desiredHeight);
      
    }
    calculateTotalHeight() {
      this.totalHeight = this.sections.reduce((acc, section: ElementRef) => {
        return acc + section.nativeElement.offsetHeight;
      }, 0) + this.subscribeService.footerHeight;
    }
}
