import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public setData(key: string, value: any): void {
    const stringifyData = JSON.stringify(value);
    localStorage.setItem(key, stringifyData);
  }

  public getData(key: string): any {
    const rowData = localStorage.getItem(key);

    if (!rowData) return;

    const data = JSON.parse(rowData);
    return data;

    //or
    // if (rowData) {
    //   const data = JSON.parse(rowData);
    //   return data;
    // }
  }

  // public editData(key: string, value: any): void {

  // }

  public deleteData(key: string): void {
    localStorage.removeItem(key);
  }
}
