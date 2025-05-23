import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../services/projectdata.service';
import { HeaderComponent } from '../shared/header/header.component';
import { HeightService } from '../services/height.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements AfterViewInit, OnInit{

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  @ViewChild('imprint', { static: true, read: ElementRef }) imprint!: ElementRef;

  constructor(private heightService: HeightService) {
    this.projectdata.atImprint = true;
  }
  /**
   * scrolls the window to the top (0,0) when the component initializes
   */
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  /**
   * calculates the height of the "imprint" element after the view initializes and updates the height using the updateHeight method
   */
  ngAfterViewInit() {
    setTimeout(() => {
    let imprintHeight = this.imprint.nativeElement.offsetHeight;
    this.updateHeight(imprintHeight);
    }, 0);
  }

  /**
   * updates the height by calculating the sum of the imprintHeight and the footer height, then sets the new height using the heightService
   * @param imprintHeight - calculated height of the imprint component
   */
  updateHeight(imprintHeight: number) {
    const desiredHeight = imprintHeight + this.projectdata.footerHeight; 
    this.heightService.setHeight(desiredHeight);
  }
}
