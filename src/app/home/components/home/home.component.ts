import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];

  constructor(private ProductService: ProductService) {}
  ngOnInit() {
    this.ProductService.getProducts$().subscribe((data) => {
      //returns observable , subscribe מאזינה לאובזירבבלי
      this.products = data;
      console.log(data);
    });
  }
  ngOnDestroy() {}
}
