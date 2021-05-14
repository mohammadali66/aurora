# select2-aurora

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Installation

for last version run

```
npm i select2-aurora@latest
```

for a special version run

```
npm i select2-aurora@1.0.0
```

After install the package, you must add _Select2AuroraModule_ in _app.modules.ts_

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Select2AuroraModule } from 'select2-aurora';       // <-- here

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Select2AuroraModule     // <-- here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## How to use package with option list

We define a model named _AuroraSelectModel_ in select2-aurora.
You can prepare your list with this model.
First of all import _AuroraSelectModel_ in your component.
Then define your list with this model.
The _AuroraSelectModel_ has two properties, one is _id_, and second is _label_.


```typescript
import { AuroraSelectModel } from 'select2-aurora';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  countriesList: Array<AuroraSelectModel> = new Array<AuroraSelectModel>();

  ngOnInit()
  {
    this.initOptionList();
  }

  initOptionList()
  {
    this.countriesList = new Array<AuroraSelectModel>();
    this.countriesList.push(new AuroraSelectModel(1, 'Austria'));
    this.countriesList.push(new AuroraSelectModel(2, 'Belgium'));
    this.countriesList.push(new AuroraSelectModel(3, 'Finland'));
    this.countriesList.push(new AuroraSelectModel(4, 'France'));
    this.countriesList.push(new AuroraSelectModel(5, 'Germany'));
    this.countriesList.push(new AuroraSelectModel(6, 'Spain'));
    this.countriesList.push(new AuroraSelectModel(7, 'Portugal'));
  }
}
```

Then you can define _select2-aurora_ in your template.

```html
<select2-aurora
  [optionList]="countriesList"  
>
</select2-aurora>
```

## Using select2-aurora in a form

You can use _select2-aurora_ in a form. Here we have an example

```typescript
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuroraSelectModel } from 'select2-aurora';

export class AppComponent implements OnInit {
  countriesList: Array<AuroraSelectModel> = new Array<AuroraSelectModel>();  
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {}

  ngOnInit()
  {
    this.initOptionList();
    this.createForm();
  }

  createForm()
  {
    this.formGroup = this.formBuilder.group({
      countryFC: new FormControl()
    });
  }

  initOptionList()
  {
    // as previous example
  }

  onSaveForm()
  {
    console.log(this.formGroup.value);
  }
}

```

You can set a default value for form control.

```typescript
this.formGroup = this.formBuilder.group({
  countryFC: new FormControl(2)
});
```

in template

```html
<form [formGroup]="formGroup" (ngSubmit)="onSaveForm()">
  <span>Countries:</span>
  <select2-aurora
    formControlName="countryFC"
    [optionList]="countriesList"
  >
  </select2-aurora>
  <br>

  <button type="submit" name="button">Save</button>
</form>
```

## API service

You can fill the options list with an API service.

```typescript
apiUrl = 'http://127.0.0.1:8000/view1/';
```

```html
<select2-aurora
  formControlName="countryFC"
  [apiUrl]="apiUrl"
>
</select2-aurora>
```

If your API has JWT token, then you can pass your token to this module

```typescript
apiUrl = 'http://127.0.0.1:8000/view1/';
jwtToken = 'dfsdfe3423i4jfhsdjnvsjhr3h4j23h4j23h4j232j4';
```

```html
<select2-aurora
  formControlName="countryFC"
  [apiUrl]="apiUrl"
  [jwtToken]="jwtToken"
>
</select2-aurora>
```

If you use both _optionList_ and _apiUrl_ simultaneous, the module just use _apiUrl_.

## Source code

The project is open source, and you can access to source code [here](https://github.com/mohammadali66/aurora/tree/master/projects/select2-aurora)
