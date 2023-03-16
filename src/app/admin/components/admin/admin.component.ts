import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];

  constructor(private ProductService: ProductService) {}
  ngOnInit() {
    this.ProductService.getProducts$().subscribe((data) => {
      console.log(data);
    });
  }
  ngOnDestroy() {}
}
