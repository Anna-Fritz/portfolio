import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../projectdata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {

  project = inject(ProjectdataService);
  translate = inject(TranslationService);
  footerHeight: number = 0;
  screenwidth = window.screen.width;

  @ViewChild('footer', { static: true, read: ElementRef }) footer!: ElementRef;

  ngAfterViewInit() {
    // Berechne die Höhe der Komponente
    this.footerHeight = this.footer.nativeElement.offsetHeight;
    this.project.footerHeight = this.footerHeight;
  }
}
