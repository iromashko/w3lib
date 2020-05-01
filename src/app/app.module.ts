import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoreComponent } from './more/more.component';
import { GridViewComponent } from './grid-view/grid-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreComponent,
    GridViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
