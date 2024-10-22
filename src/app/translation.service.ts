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

  public switchLanguage(language: string) {
    this.translate.use(language);
  }

}