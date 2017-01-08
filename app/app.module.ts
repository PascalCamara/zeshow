import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './route/app-routing.module';

import { AppComponent }  from './app.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { ZeshowHeaderComponent } from './header/header.component';
import { ZeshowFooterComponent } from './footer/footer.component';
import { ZeshowPagesComponent } from './pages/pages.component';
import { ZeshowArtistPageComponent } from './pages/artist-page/artist-page.component';

import { ZeshowLoginComponent } from './pages/login/login.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ 
    AppComponent,

    ZeshowHeaderComponent,
    ZeshowFooterComponent,

    ZeshowPagesComponent,
    ZeshowArtistPageComponent,

    ZeshowLoginComponent

     ],
  providers: [ CookieService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
