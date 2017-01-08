import { Component } from '@angular/core';

import {CookieService} from 'angular2-cookie/core';
declare var $: any

@Component({
    selector : 'artist-page',
    templateUrl : 'app/pages/artist-page/artist-page.component.html',
}) 

export class ZeshowArtistPageComponent {

    constructor(private _cookieService:CookieService){}

    getCookie(key: string){
        return this._cookieService.get(key);
    }

    send(): void {
        

        let tokenSession = this.getCookie('zeshowTokenUser');

        if (typeof(tokenSession) === "undefined") {
            $('#contactArtistModal').modal('toggle')
            $("#loginModal").modal({show: true})
        }
     

    }
 }