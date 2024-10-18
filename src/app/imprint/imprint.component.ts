import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../projectdata.service';
import { HeaderComponent } from '../shared/header/header.component';
import { HeightService } from '../height.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements AfterViewInit {

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  @ViewChild('imprint', { static: true, read: ElementRef }) imprint!: ElementRef;

  constructor(private heightService: HeightService) {
    this.projectdata.atImprint = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
    let imprintHeight = this.imprint.nativeElement.offsetHeight;
    this.updateHeight(imprintHeight);
    }, 0);
  }

  updateHeight(imprintHeight: number) {
    const desiredHeight = imprintHeight + this.projectdata.footerHeight; 
    this.heightService.setHeight(desiredHeight);
    console.log("Imprint hats geklappt?", desiredHeight);
    console.log('Imprint New Height:', desiredHeight)
  }



}
