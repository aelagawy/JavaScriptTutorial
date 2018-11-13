import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';

 
@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent 
   ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
