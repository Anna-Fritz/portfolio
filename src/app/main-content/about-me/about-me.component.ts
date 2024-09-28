import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  showStripes(stripes: HTMLElement) {
    stripes.style.top = "5%";
    stripes.style.left = "-8%";
  }
}
