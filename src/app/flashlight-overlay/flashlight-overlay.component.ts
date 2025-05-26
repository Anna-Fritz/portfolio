import { Component, Input, OnDestroy, OnInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-flashlight-overlay',
  standalone: true,
  imports: [],
  templateUrl: './flashlight-overlay.component.html',
  styleUrl: './flashlight-overlay.component.scss'
})

export class FlashlightOverlayComponent implements OnInit, OnDestroy {
  @Input() radius = 120; 
  @Input() darkness = 0.95; 
  @Input() active = true;

  private mouseMoveHandler = this.updateFlashlightPosition.bind(this);

  constructor(private renderer: Renderer2) {}
  flashlightShown = false;

  ngOnInit(): void {
    const flashlightShown = localStorage.getItem('flashlightShown');
    const overlay = document.querySelector('.flashlight-overlay') as HTMLElement;
    if (!flashlightShown) {
      if (this.active) {
        document.addEventListener('mousemove', this.mouseMoveHandler);
      }
      setTimeout(() => {
        if (overlay) {
          overlay.classList.remove('active');
          setTimeout(() => {
            overlay.style.display = 'none';
          }, 1000);
        }
      }, 17000);
      localStorage.setItem('flashlightShown', 'true');
    } else {
      overlay.style.display = 'none';
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  updateFlashlightPosition(event: MouseEvent): void {
    const overlay = document.querySelector('.flashlight-overlay') as HTMLElement;
    if (!overlay) return;

    overlay.style.setProperty('--x', `${event.clientX}px`);
    overlay.style.setProperty('--y', `${event.clientY}px`);
    overlay.style.setProperty('--radius', `${this.radius}px`);
    overlay.style.setProperty('--darkness', `${this.darkness}`);
  }
}