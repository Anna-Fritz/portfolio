import { Component, inject, OnInit } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../projectdata.service';
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
  }

  mask = 'none';

  animated = true;

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

  hovered = false;
  staticImage = 'assets/img/anna_color.jpg';
  animatedGif = 'assets/img/anna_smile.gif';

  switchEffect() {
    if (this.animated == true) {
      this.animated = false;
    } else {
      this.animated = true;
    }
  }

}
