import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentIndex = 0;
  referenceWidth = 732;
  isSelected = [
    true, false, false, false
  ]


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

}
