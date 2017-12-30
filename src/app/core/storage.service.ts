import * as ElectronSettings from 'electron-settings';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() { }

  set(key, value) {
    ElectronSettings.set(key, value);
  }

  get(key) {
    const value = ElectronSettings.get(key);

    if (!value) { return false; }

    return value;
  }

  remove(key) {
    ElectronSettings.delete(key);
  }
}
