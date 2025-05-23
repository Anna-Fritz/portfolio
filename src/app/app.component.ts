import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, inject, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SingleProjectComponent } from './main-content/projects/single-project/single-project.component';
import { ProjectdataService } from './services/projectdata.service';
import { HeightService } from './services/height.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SingleProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title: string = 'portfolio';

  constructor(public projectdata: ProjectdataService, public heightService: HeightService) {}

  /**
   * subscribes to height changes from the height service and calls adjustHeight to update the component's height.
   */
  ngAfterViewInit() {
    this.heightService.heightChanged$.subscribe(height => {
      this.adjustHeight(height);
    });
  }

  /**
   * adjusts the height of the project container element to the specified value in pixels
   * @param height 
   */
  adjustHeight(height: number) {
    const projectContainer = document.getElementById('projectContainer');
    if (projectContainer) {
      projectContainer.style.height = `${height}px`;
    }
  }
}