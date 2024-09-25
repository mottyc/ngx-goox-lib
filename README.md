# NgxGooxLib

TypeScript client library for GooX API, for Angular applications (for Angular 18).

### How to use The Library

1. Add the package to your package.json file
2. In your Angular application, add the module

```TypeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { GooxLibModule } from '@mottyc/ngx-goox-lib'; // <-- import the module

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GooxLibModule.forRoot({ // <-- include it in your app module
      api: 'http://localhost:8080/v1' // <-- configure GooxAPI url
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### GooxConfig

* **`api`** [`string`] configure Goox API url.