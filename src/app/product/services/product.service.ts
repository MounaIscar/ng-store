import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Routes } from 'src/app/core/http/API';
import { IProduct } from 'src/app/shared/models';
import { PRODUCTS_MOCK } from './product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts$(): Observable<IProduct[]> {
    return <Observable<IProduct[]>>this.http.get(Routes['allProducts']); //casting for the allProducts to Observable<IProduct[]>
    //or other casting:   return this.http.get(Routes["allProducts"]) as Observable<IProduct[]>;
  }
}
