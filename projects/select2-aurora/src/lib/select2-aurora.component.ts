import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';
import {Observable} from 'rxjs';

import { AuroraSelectModel } from './models';
import { MainService } from './services/main.service';


@Component({
  selector: 'select2-aurora',
  templateUrl: './select2-aurora.component.html',
  styleUrls: ['./select2-aurora.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select2AuroraComponent),
      multi: true
    }
  ]
})
export class Select2AuroraComponent implements ControlValueAccessor, OnInit {

  @Input() name: string;
  @Input('value') val: string;

  @Input() optionList: Array<AuroraSelectModel> = new Array<AuroraSelectModel>();
  @Input() apiUrl = '';
  @Input() jwtToken = '';

  optionList2: Array<AuroraSelectModel> = new Array<AuroraSelectModel>();
  selectedItem:AuroraSelectModel = new AuroraSelectModel(0, '');
  searchTextNasimFormControl: FormControl = new FormControl('');
  filteredOptions: Observable<string[]>;

  ERROR_MESSAGE_LIST = [
    "items in optionList are not 'AuroraSelectModel' object.",
    "error from API."
  ];

  errorMessage = '';

  // ...........................................................................
  constructor(private mainService: MainService) { }

  // ...........................................................................
  ngOnInit(): void {
    this.initializeComponent();
    this.checkingApiUrlExist();
    this.searchTextChange();
  }

  // ...........................................................................
  /*
  * for ControlValueAccessor
  */
  onChange: any = () => {};
  // ...........................................................................

  /*
  * for ControlValueAccessor
  */
  onTouched: any = () => { };
  // ...........................................................................

  /*
  * for ControlValueAccessor
  */
  get value()
  {
    return this.val;
  }

  // ...........................................................................
  /*
  * for ControlValueAccessor
  */
  set value(val)
  {
    this.val = val;
    if(this.val) {
      for(let item of this.optionList){
        if(this.val == item.id){
          this.selectedItem = item;
          break;
        }
      }
    }

    this.onChange(val);
    this.onTouched();
  }

  // ...........................................................................
  /*
  * for ControlValueAccessor
  */
  registerOnChange(fn) {
    this.onChange = fn;
  }

  // ...........................................................................
  /*
  * for ControlValueAccessor
  */
  registerOnTouched(fn)
  {
    this.onTouched = fn;
  }

  // ...........................................................................
  /*
  * for ControlValueAccessor
  */
  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  // ...........................................................................
  // call this function when isDisabled == true
  // setDisabledState(isDisabled: boolean): void {
  //   this.isDisabled = isDisabled;
  // }

  // ...........................................................................
  initializeComponent()
  {
    this.errorMessage = '';
    this.optionList2 = this.optionList;
    this.initSelectedItem();
  }

  // ...........................................................................
  initSelectedItem()
  {
    // if(!this.formControl.value) {
    //   return;
    // }
    // for(let item of this.optionList){
    //   if(this.formControl.value == item.id){
    //     this.selectedItem = item;
    //     break;
    //   }
    // }
  }

  // ...........................................................................
  checkingApiUrlExist()
  {
    if(this.apiUrl == ''){
      this.checkingTypeOfOptionList();
    }
    else{
      this.callDataFromAPI();
    }
  }

  // ...........................................................................
  checkingTypeOfOptionList()
  {
    if(this.optionList == null)
      return
    if(this.optionList.length != 0){
      for(let item of this.optionList){
        if(!(item instanceof AuroraSelectModel)){

          this.errorMessage = this.ERROR_MESSAGE_LIST[0];
        }
      }
    }
  }

  // ...........................................................................
  callDataFromAPI()
  {
    if(this.jwtToken){
      // console.log('auth');
      this.callAPIAuth();
    }
    else{
      // console.log('no auth');
      this.callAPINoAuth();
    }
  }

  // ...........................................................................
  callAPIAuth()
  {
    this.mainService.getApi(this.apiUrl, this.jwtToken).subscribe(
      (data: any) => {
        // console.log(data);
        this.readAPIData(data);
      },
      (error) => {
        console.log(error)
        this.errorMessage = this.ERROR_MESSAGE_LIST[1];
      }
    );
  }

  // ...........................................................................
  callAPINoAuth()
  {
    this.mainService.getApiWithoutAuth(this.apiUrl).subscribe(
      (data: any) => {
        this.readAPIData(data);
      },
      (error) => {
        this.errorMessage = this.ERROR_MESSAGE_LIST[1];
      }
    );
  }

  // ...........................................................................
  readAPIData(data)
  {

    let arrayConstructor = [].constructor;
    let dataofservice: any;

    // if data is json ...
    if (data.constructor === arrayConstructor) {
        dataofservice = data;
    }
    else{
      // if data is string ...
      dataofservice = JSON.parse(data);
    }

    if(dataofservice == null)
      return

    this.optionList = new Array<AuroraSelectModel>();
    try{
      if(typeof data == 'string'){
        for(let item of dataofservice){
          this.optionList.push(
            new AuroraSelectModel(item.id, item.label)
          );
        }
      }
      else {
        for(let item of data){
          this.optionList.push(
            new AuroraSelectModel(item.id, item.label)
          );
        }
      }
      this.optionList2 = this.optionList;
      this.initSelectedItem();
    }
    catch{
      this.errorMessage = this.ERROR_MESSAGE_LIST[1];
    }
  }

  // ...........................................................................
  searchTextChange()
  {
    this.searchTextNasimFormControl.valueChanges.subscribe(value => this._filterOptionList(value));
  }

  // ...........................................................................
  private _filterOptionList(value: string)
  {
    const filterValue = value.toLowerCase();

    this.optionList2 = new Array<AuroraSelectModel>();
    let startIndex = 0
    let filterPart = '';

    for(let item of this.optionList){
      startIndex = item.label.toLowerCase().indexOf(filterValue)

      if(startIndex !== -1){
        filterPart = item.label.substring(startIndex, startIndex + filterValue.length);
        this.optionList2.push(new AuroraSelectModel(item.id, item.label.replace(filterPart, '<u>' + filterPart + '</u>')));
      }
    }
  }

  // ...........................................................................
  onSelectItem(item)
  {
    for(let item2 of this.optionList){
      if(item.id === item2.id){
        this.selectedItem = item2;
        // this.formControl.setValue(this.selectedItem.id);
        // this.val = this.selectedItem.id;
        this.writeValue(this.selectedItem.id);
        break;
      }
    }
  }

  // ...........................................................................
  displayFieldCss()
  {
    return 'main-btn rounded';

    // if(this.isFieldInvalid()){
    //   return 'main-btn rounded' + ' invalid-span';
    // }
    // else {
    //   return 'main-btn rounded';
    // }
  }
}
