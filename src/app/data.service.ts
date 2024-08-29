import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private sharedObject: any;

  setSharedObject(obj: any) {
    this.sharedObject = obj;
  }

  getSharedObject() {
    return this.sharedObject;
  }
}
