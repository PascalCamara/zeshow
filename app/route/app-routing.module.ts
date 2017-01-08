import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZeshowArtistPageComponent } from '../pages/artist-page/artist-page.component';



const routes: Routes = [
    { path: '' , redirectTo: '/artist-page', pathMatch: 'full'},
    { path: 'artist-page', component: ZeshowArtistPageComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }