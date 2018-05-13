import {Injectable} from '@angular/core';
import {Field} from './field';

@Injectable()
export class SearchStore {

  private _filters: Field[];
  private _selected: Number;

  constructor() {
  }

  get filters(): Field[] {
    return this._filters;
  }

  set filters(value: Field[]) {
    this._filters = value;
  }

  get selected(): Number {
    return this._selected;
  }

  set selected(value: Number) {
    this._selected = value;
  }
}
