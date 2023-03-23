import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';
import { EditProductComponent } from '../edit-product/edit-product.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  public displayedColumns: Array<string> = [];
  public dataSource: MatTableDataSource<IProduct> = new MatTableDataSource();
  public products: IProduct[] = [];

  ngOnInit() {
    // this.productService.getProducts$().subscribe((data) => {
    //   this.initTable(data);
    //   this.initFilterAndPagination();
    // });

    this.productService
      .getProducts$()
      .pipe()
      .subscribe((data) => {
        console.log('all products', data);
        this.initTable(data);
        this.initFilterAndPagination();
      });

    this.productService.fetchProducts();
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private initTable(data: IProduct[]): void {
    console.log('all products', data);
    this.displayedColumns = Object.keys(data[0]);
    this.displayedColumns.push('edit');
    this.dataSource = new MatTableDataSource(data);
  }

  initFilterAndPagination() {
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit() {
    this.initFilterAndPagination();
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: {
        id: id,
      },
      width: '450px',
    });
  }
}
