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

## Code scaffolding

Run `ng generate component component-name --project select2-aurora` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project select2-aurora`.
> Note: Don't forget to add `--project select2-aurora` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build select2-aurora` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build select2-aurora`, go to the dist folder `cd dist/select2-aurora` and run `npm publish`.

## Running unit tests

Run `ng test select2-aurora` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
