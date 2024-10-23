import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  isChecked: boolean = false;

  constructor(private translate: TranslateService) { 
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
    } else {
      this.switchLanguage('en');
    }
  }
}