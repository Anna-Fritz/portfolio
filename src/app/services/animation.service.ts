import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

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

  onLeaveToSide(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const dot = target.querySelector('.hover-dot') as HTMLElement;
  
    if (!dot) return;
  
    // Coordinates of the dot in the viewport
    const rect = dot.getBoundingClientRect();
  
    // create copy of the dot
    const fallingDot = dot.cloneNode(true) as HTMLElement;
    fallingDot.classList.add('sliding-dot');
  
    // Set the exact position (in relation to viewport)
    fallingDot.style.left = `${rect.left + rect.width / 2 - 3}px`; // -3 = half width of dot
    fallingDot.style.top = `${rect.top + window.scrollY}px`; // scrollY for correct position
    dot.style.visibility = `hidden`;

    document.body.appendChild(fallingDot);
    setTimeout(() => {
      fallingDot.remove();
    }, 3000);

  }

}
