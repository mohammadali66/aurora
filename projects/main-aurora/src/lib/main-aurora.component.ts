import { Component, OnInit } from '@angular/core';


export class AuroraSelectModel{

  private _id: any;
  private _label: string;

  constructor(id, label){
    this._id = id;
    this._label = label;
  }

  get id(){
    return this._id;
  }

  set id(val){
    this._id = val;
  }

  get label(){
    return this._label;
  }

  set label(val){
    this._label = val;
  }
}


@Component({
  selector: 'lib-main-aurora',
  template: `
    <p>
      main-aurora works!
    </p>
  `,
  styles: [
  ]
})
export class MainAuroraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
