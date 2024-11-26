import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { ProjectdataService } from './projectdata.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  isChecked: boolean = false;

  constructor(private translate: TranslateService, private project: ProjectdataService) { 
    translate.setDefaultLang('de');
  }

  /**
   * switches the application's language to the specified language using the translate service.
   * @param language 
   */
  public switchLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * toggles language, if toggle checkbox is checked language is German, else is English
   */
  toggleLanguage() {
    if(this.isChecked) {
      this.switchLanguage('de');
      this.project.isEN = false;
    } else {
      this.switchLanguage('en');
      this.project.isEN = true;
    }
  }
}