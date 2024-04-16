import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../app/store/keyValuePairs.reducers';
import * as keyValuePairActions from '../app/store/keyValuePairs.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  keyValuePairs = this.store.select(store => store.keyValuePairs.keyValuePairs);
  editingIndex = this.store.select(store => store.keyValuePairs.editingIndex);
  newKey: string = '';
  newValue: string = '';
  key1: string = '';
  key2: string = '';

  constructor(private store: Store<{ keyValuePairs: State }>) { 
  }

  addKeyValuePair(key: string, value: string): void {
    this.store.dispatch(keyValuePairActions.addKeyValuePair({ key, value }));
  }

  concatKeyValuePair(key1: string, key2: string): void {
    this.store.dispatch(keyValuePairActions.concatKeyValuePair({ key1, key2 }));
  }

  editKeyValuePair(index: number, key: string, value: string): void {
    this.store.dispatch(keyValuePairActions.editKeyValuePair({ index, key, value }));
  }

  ngOnInit(): void { }
}
