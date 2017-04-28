import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccComponent } from './accordion/accordion.component';
import { AccService } from './accordion.service';

@NgModule({
  declarations: [
    AppComponent,
    AccComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ AccService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
