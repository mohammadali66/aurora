import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { AuroraSelectModel } from 'projects/select2-aurora/src/lib/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front-end';
  optionList: Array<AuroraSelectModel> = new Array<AuroraSelectModel>();
  apiUrl = 'dsfdf';
  fc1: FormControl = new FormControl(10);
  formGroup: FormGroup;

  //............................................................................
  constructor(private formBuilder: FormBuilder){}

  //............................................................................
  ngOnInit()
  {
    this.createForm();
    this.initOptionList();
  }

  //............................................................................
  createForm()
  {
    this.formGroup = this.formBuilder.group({
      fc2: new FormControl(2)
    })
  }
  //............................................................................
  onSave()
  {
    console.log(this.formGroup.controls['fc2'].value);
  }

  //............................................................................
  initOptionList()
  {
    this.optionList = new Array<AuroraSelectModel>();
    this.optionList.push(new AuroraSelectModel(1, 'option 1'));
    this.optionList.push(new AuroraSelectModel(2, 'option 2'));
    this.optionList.push(new AuroraSelectModel(4, 'asas'));
    this.optionList.push(new AuroraSelectModel(5, 'ffss'));
    this.optionList.push(new AuroraSelectModel(6, 'awqwqw'));
    this.optionList.push(new AuroraSelectModel(7, 'vcvdf'));
    this.optionList.push(new AuroraSelectModel(8, 'xzxcc'));
    this.optionList.push(new AuroraSelectModel(9, 'bvbvbvc'));
    this.optionList.push(new AuroraSelectModel(10, 'awqwq'));
    this.optionList.push(new AuroraSelectModel(11, 'cvcvfd'));
    this.optionList.push(new AuroraSelectModel(12, 'xzcc'));
  }
}
