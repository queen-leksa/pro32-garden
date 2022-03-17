import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  "@angular/router";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: MainComponent},
      {path: "page", component: PageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
