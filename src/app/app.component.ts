import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, inject, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SingleProjectComponent } from './main-content/projects/single-project/single-project.component';
import { ProjectdataService } from './projectdata.service';
import { ImprintComponent } from './imprint/imprint.component';
import { HeightService } from './height.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, HeaderComponent, FooterComponent, SingleProjectComponent, ImprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title: string = 'portfolio';

  constructor(public projectdata: ProjectdataService, public heightService: HeightService) {}

  ngAfterViewInit() {
    this.heightService.heightChanged$.subscribe(height => {
      this.adjustHeight(height);
    });
  }

  adjustHeight(height: number) {
    const projectContainer = document.getElementById('projectContainer');
    if (projectContainer) {
      projectContainer.style.height = `${height}px`;
    }
  }
}