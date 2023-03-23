import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, Subject } from 'rxjs';
import { Routes } from 'src/app/core/http/API';
import { StorageService } from 'src/app/core/services/storage.service';
import { IProduct } from 'src/app/shared/models';
import { PRODUCTS_MOCK } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private productsSubject$: Subject<IProduct[]> = new Subject();

  public getProducts$(): Observable<IProduct[]> {
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Origin': '*',
    // };

    // const requestOptions: any = {
    //   headers: new Headers(headerDict),
    // };
    // return <Observable<IProduct[]>>of(PRODUCTS_MOCK); //this.http.get(Routes['allProducts']);

    return this.productsSubject$.asObservable(); //asObservable , not to give the all options of the data
  }

  public getSingleProduct$(id: string): Observable<IProduct> {
    return <Observable<IProduct>>this.http.get(Routes['singleProduct'](id));
  }

  public fetchProducts(): void {
    const existingData: IProduct[] = this.storageService.getData('products');
    if (existingData) {
      this.productsSubject$.next(existingData);
    } else {
      //http:
      //this.http.get<IProduct[]>(Routes['allProducts']).subscribe(data =>{});
      of(PRODUCTS_MOCK)
        .pipe(delay(3000))
        .subscribe((data) => {
          this.storageService.setData('products', data);
          this.productsSubject$.next(data);
          //this can also work: this.storageService.setData('products', data);
        });
    }
  }
}
