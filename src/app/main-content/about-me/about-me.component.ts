import { Component, inject, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, NgStyle, NgIf],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  mask = 'none';
  animated = true;
  isFlashlight = false;
  glowActive = false;
  hovered = false;
  staticImage = 'assets/img/anna_color.jpg';
  animatedGif = 'assets/img/anna_smile.gif';

  /**
   * moves & reveals stripes-Element from behind the image
   * @param stripes Div element filled with stripes
   */
  showStripes(stripes: HTMLElement) {
    stripes.style.top = "5%";
    stripes.style.left = "-8%";
  }
  
  /**
   *  initializes the component by remove colored bg of navbar
   */
  ngOnInit() {
    this.projectdata.isColored = false;

    document.addEventListener('mousemove', (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  }

  onMouseMove(event: MouseEvent) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Radial mask centered on mouse position
    this.mask = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, black 100%)`;
  }

  hideMask() {
    this.mask = 'none';
  }

  toggleFlashlightCursor() {
    this.isFlashlight = !this.isFlashlight;
    this.glowActive = !this.glowActive;
    if (this.isFlashlight) {
      document.body.classList.add('flashlight-cursor');
      document.body.classList.add('glow');
    } else {
      document.body.classList.remove('flashlight-cursor');
      document.body.classList.remove('glow');
    }
  }

  switchEffect() {
    if (this.animated == true) {
      this.animated = false;
    } else {
      this.animated = true;
    }
  }

}
