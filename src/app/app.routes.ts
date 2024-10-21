import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeroComponent } from './main-content/hero/hero.component';

export const routes: Routes = [
    {path: 'imprint', component: ImprintComponent},
    {path: '', component: MainContentComponent},
]
