import { Component } from "@angular/core";

@Component({
    selector : "my-app",
    template: `
        <!-- header -->
      <zeshow-header></zeshow-header>
      <div class="container">
      <router-outlet></router-outlet>
      </div>
      <!-- footer -->
      <zeshow-footer></zeshow-footer>
      <login></login>
    `

})

export class AppComponent { }