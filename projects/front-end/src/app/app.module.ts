import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Select2AuroraModule } from 'projects/select2-aurora/src/lib/select2-aurora.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Select2AuroraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
