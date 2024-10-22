import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'home', component: MainContentComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: '', component: MainContentComponent},
]

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }

// @NgModule({
//     imports: [
//       RouterModule.forRoot(routes, {
//         scrollPositionRestoration: 'enabled', // Behält die Scrollposition bei
//         anchorScrolling: 'enabled',          // Aktiviert das automatische Scrollen zu Fragmenten
//       })
//     ],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule {}