import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  "@angular/router";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageComponent } from './page/page.component';
import { AjaxComponent } from './ajax/ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: MainComponent},
      {path: "page", component: PageComponent},
      {path: "ajax", component: AjaxComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
