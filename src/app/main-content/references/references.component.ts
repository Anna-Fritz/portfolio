import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentIndex = 0;
  itemWidth = 632;

  references: {
    content: string,
    name: string
  }[] = [
    // {
    //   content: 'Anna was an extremely dedicated team member from the DA who always gave her best to push our group project forward. Her creativity and attention to detail elevated our work to a new level. She was not only technically proficient but also an excellent communicator, capable of conveying ideas effectively. Thanks to her thorough research, we were able to complete the project with increased efficiency and success.',
    //   name: 'Jennifer Petrus - Project Partner'
    // },
    {
      content: 'It was a pleasure working with Anna and the team. Thanks to the excellent communication and Annas tireless dedication, we achieved our goal on schedule and successfully completed the project. Anna is an outstanding team player, and I would be happy to work with her again in the future. I wish her all the best for the future.',
      name: 'Vadim Wart - Project Partner'
    },
    {
      content: 'Anna has impressed us during our collaboration with her outstanding skills in HTML and CSS. In particular, she demonstrated a deep understanding of JavaScript and significantly contributed to solving complex challenges. Her ability to quickly identify and efficiently resolve issues has been instrumental in advancing the team. Her exceptional dedication, even beyond regular working hours, was invaluable to the success of the project.',
      name: 'Salmai Safi - Project Partner'
    },
    {
      content: 'Working with Anna is simply fantastic! Anna could certainly work in the field of design. Everything she does is well-rounded, accurately planned, and truly executed in an appealing manner. Her communication with her teammates is always on point, friendly, and her entire demeanor is a real asset to any team! I would gladly and wholeheartedly work with her anytime.',
      name: 'Ingolf Stein - Project Partner'
    },
    {
      content: 'Anna was an extremely dedicated team member from the DA who always gave her best to push our group project forward. Her creativity and attention to detail elevated our work to a new level. She was not only technically proficient but also an excellent communicator, capable of conveying ideas effectively. Thanks to her thorough research, we were able to complete the project with increased efficiency and success.',
      name: 'Jennifer Petrus - Project Partner'
    },
    // {
    //   content: 'It was a pleasure working with Anna and the team. Thanks to the excellent communication and Annas tireless dedication, we achieved our goal on schedule and successfully completed the project. Anna is an outstanding team player, and I would be happy to work with her again in the future. I wish her all the best for the future.',
    //   name: 'Vadim Wart - Project Partner'
    // },
  ];

  nextRef(){
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
    // if (this.currentIndex < this.references.length - 1) {
    //   this.currentIndex++;
    // } else if (this.currentIndex == this.references.length -2) {
    //   this.currentIndex = 0;
    //   this.itemWidth = 0;
    // }
  }

  previousRef(){
    this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
    // if (this.currentIndex > 0) {
    //   this.currentIndex--;
    // } else if (this.currentIndex == 0) {
    //   this.currentIndex = this.references.length - 1;
    // }
  }

}
