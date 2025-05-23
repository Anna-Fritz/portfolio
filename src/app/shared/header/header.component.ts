import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectdataService } from '../../projectdata.service';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  project = inject(ProjectdataService);
  translate = inject(TranslationService);

  onHover(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const dot = target.querySelector('.hover-dot') as HTMLElement;
    if (!dot) return;
    dot.style.visibility = 'visible';
  }

  onLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const dot = target.querySelector('.hover-dot') as HTMLElement;
  
    if (!dot) return;
  
    // Coordinates of the dot in the viewport
    const rect = dot.getBoundingClientRect();
  
    // create copy of the dot
    const fallingDot = dot.cloneNode(true) as HTMLElement;
    fallingDot.classList.add('falling-dot');
  
    // Set the exact position (in relation to viewport)
    fallingDot.style.left = `${rect.left + rect.width / 2 - 3}px`; // -3 = half width of dot
    fallingDot.style.top = `${rect.top + window.scrollY}px`; // scrollY for correct position
    dot.style.visibility = `hidden`;

    document.body.appendChild(fallingDot);
    setTimeout(() => {
      fallingDot.remove();
    }, 5000);
  }

}

