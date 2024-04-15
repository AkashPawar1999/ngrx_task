import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { keyValuePairsReducer } from './app/store/keyValuePairs.reducers';


bootstrapApplication(AppComponent, {
  providers: [provideStore ({store: keyValuePairsReducer })]
})

