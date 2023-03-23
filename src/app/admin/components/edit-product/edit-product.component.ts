import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  public id: any;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.id);
  }

  ngOnInit() {
    this.productService.getSingleProduct$(this.id).subscribe((data) => {
      console.log(data);
    });
  }
}
