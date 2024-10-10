import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {

  translate = inject(TranslationService);

  currentIndex = 0;
  referenceWidth = 732;
  isSelected = [
    true, false, false, false
  ];

  references: {
    content: string,
    name: string,
    inFocus: boolean
  }[] = [
    {
      content: 'Anna was an extremely dedicated team member from the DA who always gave her best to push our group project forward. Her creativity and attention to detail elevated our work to a new level. She was not only technically proficient but also an excellent communicator, capable of conveying ideas effectively. Thanks to her thorough research, we were able to complete the project with increased efficiency and success.',
      name: 'Jennifer Petrus - Project Partner',
      inFocus: false
    },
    {
      content: 'It was a pleasure working with Anna and the team. Thanks to the excellent communication and Annas tireless dedication, we achieved our goal on schedule and successfully completed the project. Anna is an outstanding team player, and I would be happy to work with her again in the future. I wish her all the best for the future.',
      name: 'Vadim Wart - Project Partner',
      inFocus: true
    },
    {
      content: 'Anna has impressed us during our collaboration with her outstanding skills in HTML and CSS. In particular, she demonstrated a deep understanding of JavaScript and significantly contributed to solving complex challenges. Her ability to quickly identify and efficiently resolve issues has been instrumental in advancing the team. Her exceptional dedication, even beyond regular working hours, was invaluable to the success of the project.',
      name: 'Salmai Safi - Project Partner',
      inFocus: false
    },
    {
      content: 'Working with Anna is simply fantastic! Anna could certainly work in the field of design. Everything she does is well-rounded, accurately planned, and truly executed in an appealing manner. Her communication with her teammates is always on point, friendly, and her entire demeanor is a real asset to any team! I would gladly and wholeheartedly work with her anytime.',
      name: 'Ingolf Stein - Project Partner',
      inFocus: false
    },
    {
      content: 'Anna was an extremely dedicated team member from the DA who always gave her best to push our group project forward. Her creativity and attention to detail elevated our work to a new level. She was not only technically proficient but also an excellent communicator, capable of conveying ideas effectively. Thanks to her thorough research, we were able to complete the project with increased efficiency and success.',
      name: 'Jennifer Petrus - Project Partner',
      inFocus: false
    },
    {
      content: 'It was a pleasure working with Anna and the team. Thanks to the excellent communication and Annas tireless dedication, we achieved our goal on schedule and successfully completed the project. Anna is an outstanding team player, and I would be happy to work with her again in the future. I wish her all the best for the future.',
      name: 'Vadim Wart - Project Partner',
      inFocus: false
    },
  ];


  // nextRef(){
  //   this.currentIndex = (this.currentIndex + 1) % this.references.length;
  //   this.references[this.currentIndex+1].isSelected = true;
  //   this.references[this.currentIndex-1].isSelected = false;

  //   // this.isSelected[this.currentIndex] = true;
  //   // this.isSelected[this.currentIndex-1] = false;
  //   if (this.currentIndex == 0) {
  //     this.references[this.references.length-2].isSelected = false;
  //     // this.isSelected[this.isSelected.length-1] = false;
  //   }
  //   if (this.currentIndex == this.references.length-2) {
  //     this.currentIndex = 0;
  //     this.references[1].isSelected = true;
  //     // this.isSelected[0] = true;
  //   }
  // }

  ngOnInit() {
    if (window.screen.width <= 430) {
      this.referenceWidth = 0.92 * window.screen.width;
    } else if (window.screen.width <= 580) {
      this.referenceWidth = 0.75 * window.screen.width;
    } else if (window.screen.width <= 650) {
        this.referenceWidth = 0.80 * window.screen.width;
        console.log("check",window.screen.width);
        // this.referenceWidth = 520;
        } else if (window.screen.width <= 850) {
          this.referenceWidth = 0.75 * window.screen.width;
        } else if (window.screen.width <= 950) {
          this.referenceWidth = 0.69 * window.screen.width;
          // this.referenceWidth = 656;
          } else if (window.screen.width < 1440) {
            this.referenceWidth = 0.47 * window.screen.width;
          // this.referenceWidth = 677;
      console.log("check",window.screen.width);
    }

    window.addEventListener('resize', () => {
      console.log(`Screen size changed to ${window.screen.width}x${window.screen.height}`);
    });
  }

  nextRef(){
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
    this.isSelected[this.currentIndex] = true;
    this.isSelected[this.currentIndex-1] = false;    

    this.references[this.currentIndex+1].inFocus = true;
    this.references[this.currentIndex].inFocus = false;
    this.references[this.references.length-1].inFocus = false;

    if (this.currentIndex == 0) {
      this.isSelected[this.isSelected.length-1] = false;

    this.references[this.references.length-2].inFocus = false;
    this.references[this.references.length-1].inFocus = false;

    }
    if (this.currentIndex == this.references.length-2) {
      this.currentIndex = 0;
      this.isSelected[this.currentIndex] = true;

      this.references[this.currentIndex+1].inFocus = true;

    }
    console.log("referenceWidth", this.referenceWidth);
    
    
  }


  // nextRef(){
  //   this.currentIndex = (this.currentIndex + 1) % this.references.length;
  //   this.isSelected[this.currentIndex] = true;
  //   this.isSelected[this.currentIndex-1] = false;
  //   if (this.currentIndex == 0) {
  //     this.isSelected[this.isSelected.length-1] = false;
  //   }
  //   if (this.currentIndex == this.references.length-2) {
  //     this.currentIndex = 0;
  //     this.isSelected[0] = true;
  //   }
  // }

  previousRef(){
    this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
    this.isSelected[this.currentIndex] = true;

    if(this.currentIndex < this.references.length-2) {
    this.references[this.currentIndex+1].inFocus = true;
    this.references[this.currentIndex+2].inFocus = false;
    this.references[this.references.length-1].inFocus = false;
  }
    
    if(this.currentIndex < this.isSelected.length-1) {
      this.isSelected[this.currentIndex+1] = false;

      this.references[this.currentIndex+2].inFocus = false;

    }
    if (this.currentIndex >= this.isSelected.length-1) {
      this.isSelected[0] = false;
      this.currentIndex = this.isSelected.length-3;
      this.isSelected[this.isSelected.length-3] = true;

      this.references[1].inFocus = false;
      this.references[this.references.length-2].inFocus = true;


    }
  }


  // previousRef(){
  //   this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
  //   this.isSelected[this.currentIndex] = true;
  //   console.log("currentIndex:", this.currentIndex);
    
  //   if(this.currentIndex < this.isSelected.length-1) {
  //     this.isSelected[this.currentIndex+1] = false;
  //   }
  //   if (this.currentIndex == this.isSelected.length-1) {
  //     this.isSelected[0] = false;
  //     this.currentIndex = this.isSelected.length-3;
  //     this.isSelected[this.isSelected.length-3] = true;
  //   }
  // }

  private startX = 0;
  private deltaX = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    this.deltaX = event.touches[0].clientX - this.startX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd() {
    if (this.deltaX > 50 && this.currentIndex > 0) {
      this.previousRef();
    } else if (this.deltaX < -50) {
      this.nextRef();
    }
    this.deltaX = 0;
  }

}
