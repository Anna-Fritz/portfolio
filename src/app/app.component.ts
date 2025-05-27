import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, inject, ViewChild, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SingleProjectComponent } from './main-content/projects/single-project/single-project.component';
import { ProjectdataService } from './services/projectdata.service';
import { HeightService } from './services/height.service';
import { FlashlightOverlayComponent } from './flashlight-overlay/flashlight-overlay.component';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SingleProjectComponent, FlashlightOverlayComponent, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy{
  title: string = 'portfolio';
  introShown: boolean = false;

  constructor(public projectdata: ProjectdataService, public heightService: HeightService) {}

  ngOnInit(): void {
    const storedValue = localStorage.getItem('introShown');
    this.introShown = storedValue === 'true';
  }

  /**
   * subscribes to height changes from the height service and calls adjustHeight to update the component's height.
   */
  ngAfterViewInit() {
    this.heightService.heightChanged$.subscribe(height => {
      this.adjustHeight(height);
    });
  }

  ngOnDestroy(): void {
    localStorage.setItem('introShown', 'true');
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