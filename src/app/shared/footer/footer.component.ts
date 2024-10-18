import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../projectdata.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {

  project = inject(ProjectdataService);
  translate = inject(TranslationService);

  screenwidth = window.screen.width;

  @ViewChild('footer', { static: true, read: ElementRef }) footer!: ElementRef;

  footerHeight: number = 0;

  ngAfterViewInit() {
    // Berechne die Höhe der Komponente
    this.footerHeight = this.footer.nativeElement.offsetHeight;
    this.project.footerHeight = this.footerHeight;
  }

}
