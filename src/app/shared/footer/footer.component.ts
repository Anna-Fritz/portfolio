import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { AnimationService } from '../../services/animation.service';
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
  animation = inject(AnimationService);
  footerHeight: number = 0;
  screenwidth = window.screen.width;

  @ViewChild('footer', { static: true, read: ElementRef }) footer!: ElementRef;

  /**
   * sets the footerHeight property in the project object based on the footer's offset height after view initialization.
   */
  ngAfterViewInit() {
    this.footerHeight = this.footer.nativeElement.offsetHeight;
    this.project.footerHeight = this.footerHeight;
  }
}
