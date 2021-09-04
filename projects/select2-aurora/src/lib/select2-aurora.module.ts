import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { Select2AuroraComponent } from './select2-aurora.component';



@NgModule({
  declarations: [
    Select2AuroraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    Select2AuroraComponent
  ]
})
export class Select2AuroraModule { }
