import { Component, inject, OnInit } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../../projectdata.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  projectdata = inject(ProjectdataService);
  translate = inject(TranslationService);

  showStripes(stripes: HTMLElement) {
    stripes.style.top = "5%";
    stripes.style.left = "-8%";
  }
  
  ngOnInit() {
    this.projectdata.isColored = false;
  }

}
