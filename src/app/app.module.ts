import { keyValuePairsReducer } from './keyValuePairs/keyValuePairs.reducers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ keyvaluePairs: keyValuePairsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
