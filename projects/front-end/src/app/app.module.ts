import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Select2AuroraModule } from 'projects/select2-aurora/src/lib/select2-aurora.module';
import { ManyToManyAuroraModule } from 'projects/many-to-many-aurora/src/lib/many-to-many-aurora.module';
// import { ManyToManyAuroraModule } from 'many-to-many-aurora';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Select2AuroraModule,
    ManyToManyAuroraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
