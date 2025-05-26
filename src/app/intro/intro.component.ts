import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  firstPartText = "< Fullstack-Mindset mit Designerblick -  ";
  secondPartText = 'für digitale Erlebnisse, die vom ersten Blick bis zum letzten Klick überzeugen. />';
  displayedText = '';
  displayedLowerText = '';
  showIntro = false;
  fadeOut = false;

  ngOnInit() {
    const introShown = localStorage.getItem('introShown');

    if (!introShown) {
      this.showIntro = true;
      this.typeText(this.firstPartText, () => {
        this.typeSecondText(this.secondPartText, () => {
          setTimeout(() => {
            this.fadeOut = true;
            setTimeout(() => {
              this.showIntro = false;
            }, 1000);
          }, 3000);
        });
      });
      localStorage.setItem('introShown', 'true');
    }
  }

  typeText(text: string, callback: () => void) {
    let i = 0;
    const interval = setInterval(() => {
      this.displayedText += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        callback();
      }
    }, 100);
  }

  typeSecondText(text: string, callback: () => void) {
    let i = 0;
    const interval = setInterval(() => {
      this.displayedLowerText += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        callback();
      }
    }, 100);
  }
}
