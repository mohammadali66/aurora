import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';

import { AuroraModel} from './models';

@Component({
  selector: 'select2-aurora',
  template: `
  <p>This is select2 aurora</p>
  `,
  styles: [
  ]
})
export class Select2AuroraComponent implements OnInit {

  @Input() optionList: Array<AuroraModel> = new Array<AuroraModel>();
  @Input() apiUrl = '';
  @Input() isApiWithAuth = true;

  optionList2: Array<AuroraModel> = new Array<AuroraModel>();
  selectedItem:AuroraModel = new AuroraModel(0, '');
  searchTextNasimFormControl: FormControl = new FormControl('');
  filteredOptions: Observable<string[]>;

  // ...........................................................................
  constructor() { }

  // ...........................................................................
  ngOnInit(): void {
    this.initializeComponent();
    this.checkingApiUrlExist();
    this.searchTextChange();
  }

  // ...........................................................................
  initializeComponent()
  {}

  // ...........................................................................
  checkingApiUrlExist()
  {}

  // ...........................................................................
  searchTextChange()
  {

  }
}
