import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../services/projectdata.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {

  project = inject(ProjectdataService);
  translate = inject(TranslationService);

  currentIndex = 0;
  referenceWidth = 732;
  isSelected = [
    true, false, false, false, false
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
      content: 'With incredible flair and talent - Anna is a team player you can rely on in every project phase.',
      name: 'Fabian Roeseler - Project Partner',
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

  referencesDE: {
    content: string,
    name: string,
    inFocus: boolean
  }[] = [
    {
      content: 'Anna war ein äußerst engagiertes Teammitglied aus der DA, die stets ihr Bestes gegeben hat, unser Gruppenprojekt voranzutreiben. Ihre Kreativität und ihr Blick fürs Detail haben unsere Arbeit auf ein neues Niveau gehoben. Sie war nicht nur fachlich kompetent, sondern auch eine großartige Kommunikatorin, die effektiv Ideen vermitteln kann. Durch Ihre detaillierte Recherche konnten wir das Projekt mit erhöhter Effizienz erfolgreich abschließen.',
      name: 'Jennifer Petrus - Projekt Partnerin',
      inFocus: false
    },
    {
      content: 'Es war ein Vergnügen, mit Anna und dem Team zusammenzuarbeiten. Dank der hervorragenden Kommunikation und Annas unermüdlichem Einsatz haben wir unser Ziel termingerecht erreicht und das Projekt erfolgreich abgeschlossen. Anna ist ein hervorragender Teamplayer, und ich würde mich freuen, auch in Zukunft mit ihr zusammenzuarbeiten. Ich wünsche ihr alles Gute für die Zukunft.',
      name: 'Vadim Wart - Projekt Partner',
      inFocus: true
    },
    {
      content: 'Anna hat während unserer Zusammenarbeit durch ihre herausragenden Fähigkeiten in HTML und CSS überzeugt. Besonders in JavaScript zeigte sie ein tiefes Verständnis und trug wesentlich zur Lösung komplexer Herausforderungen bei. Ihre Fähigkeit, Probleme schnell zu identifizieren und effizient zu beheben, hat das Team entscheidend vorangebracht. Ihr außergewöhnliches Engagement, auch über die regulären Arbeitszeiten hinaus, war von unschätzbarem Wert für den Projekterfolg.',
      name: 'Salmai Safi - Projekt Partner',
      inFocus: false
    },
    {
      content: 'Mit unglaublichem Gespür und Talent – Anna ist eine Teamspielerin, auf die man sich in jeder Projektphase verlassen kann.',
      name: 'Fabian Roeseler - Projekt Partner',
      inFocus: false
    },
    {
      content: 'Die Zusammenarbeit mit Anna ist einfach fantastisch! Anna könnte durchaus im Bereich Design arbeiten. Alles, was sie tut, ist gut durchdacht, genau geplant und wirklich ansprechend ausgeführt. Ihre Kommunikation mit ihren Teamkollegen ist immer auf den Punkt, freundlich, und ihr gesamtes Auftreten ist eine echte Bereicherung für jedes Team! Ich würde jederzeit gerne und von ganzem Herzen mit ihr zusammenarbeiten.',
      name: 'Ingolf Stein - Projekt Partner',
      inFocus: false
    },
    {
      content: 'Anna war ein äußerst engagiertes Teammitglied aus der DA, die stets ihr Bestes gegeben hat, unser Gruppenprojekt voranzutreiben. Ihre Kreativität und ihr Blick fürs Detail haben unsere Arbeit auf ein neues Niveau gehoben. Sie war nicht nur fachlich kompetent, sondern auch eine großartige Kommunikatorin, die effektiv Ideen vermitteln kann. Durch Ihre detaillierte Recherche konnten wir das Projekt mit erhöhter Effizienz erfolgreich abschließen.',
      name: 'Jennifer Petrus - Projekt Partner',
      inFocus: false
    },
    {
      content: 'Es war ein Vergnügen, mit Anna und dem Team zusammenzuarbeiten. Dank der hervorragenden Kommunikation und Annas unermüdlichem Einsatz haben wir unser Ziel termingerecht erreicht und das Projekt erfolgreich abgeschlossen. Anna ist ein hervorragender Teamplayer, und ich würde mich freuen, auch in Zukunft mit ihr zusammenzuarbeiten. Ich wünsche ihr alles Gute für die Zukunft.',
      name: 'Vadim Wart - Projekt Partner',
      inFocus: false
    },
  ];

  /**
   * sets referenceWidth based on the screen width ensuring that elements scale properly across different device sizes.
   */
  ngOnInit() {
    if (window.screen.width <= 430) {
      this.referenceWidth = 0.92 * window.screen.width;
    } else if (window.screen.width <= 580) {
      this.referenceWidth = 0.75 * window.screen.width;
      } else if (window.screen.width <= 650) {
        this.referenceWidth = 0.80 * window.screen.width;
        } else if (window.screen.width <= 850) {
          this.referenceWidth = 0.75 * window.screen.width;
          } else if (window.screen.width <= 950) {
            this.referenceWidth = 0.69 * window.screen.width;
            } else if (window.screen.width < 1440) {
              this.referenceWidth = 0.47 * window.screen.width;
    }
  }

  /**
   * cycles through a list of references by incrementing currentIndex, It ensures that when the index reaches the last item, it wraps around to the first one
   */
  nextRef(){
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
    this.isSelected[this.currentIndex] = true;
    this.isSelected[this.currentIndex-1] = false;    

    this.references[this.currentIndex+1].inFocus = true;
    this.references[this.currentIndex].inFocus = false;
    this.references[this.references.length-1].inFocus = false;

    this.checkIndexIsNull();
    this.checkIndexIsLast();
  }

  /**
   * handles the special case when currentIndex is 0, which happens when the list wraps around
   */
  checkIndexIsNull() {
    if (this.currentIndex == 0) {
      this.isSelected[this.isSelected.length-1] = false;
      this.references[this.references.length-2].inFocus = false;
      this.references[this.references.length-1].inFocus = false;
    }
  }

  /**
   * handles the case where currentIndex is at the last position of the references
   */
  checkIndexIsLast() {
    if (this.currentIndex == this.references.length-2) {
      this.currentIndex = 0;
      this.isSelected[this.currentIndex] = true;
      this.references[this.currentIndex+1].inFocus = true;
    }
  }

  /**
   * This logic allows for navigation backward through the reference items in a cyclic manner
   */
  previousRef(){
    this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
    this.isSelected[this.currentIndex] = true;

    this.moveRefToLeft();
    this.restartRefCarousel();
  }
  
  /**
   * This logic manages the state of references as the carousel moves backward.
   */
  moveRefToLeft() {
    if(this.currentIndex < this.references.length-2) {
      this.references[this.currentIndex+1].inFocus = true;
      this.references[this.currentIndex+2].inFocus = false;
      this.references[this.references.length-1].inFocus = false;
      this.isSelected[this.currentIndex+1] = false;
      }  
  }

  /**
   * part of a carousel, ensuring that focus and selection are maintained as the user navigates through items.
   */
  restartRefCarousel() {
    if (this.currentIndex >= this.isSelected.length-1) {
      this.isSelected[0] = false;
      this.currentIndex = this.isSelected.length-3;
      this.isSelected[this.isSelected.length-3] = true;
      this.references[1].inFocus = false;
      this.references[this.references.length-2].inFocus = true;
    }
  }

  private startX = 0;
  private deltaX = 0;

/**
 * enables to scroll references on mobile devices
 * @param event 
 */
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