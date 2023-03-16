import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = [];

  public dataSource = new MatTableDataSource<IProduct>();
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  private _liveAnnouncer?: LiveAnnouncer;

  constructor(private ProductService: ProductService) {}
  ngOnInit() {
    this.ProductService.getProducts$().subscribe((data) => {
      this.displayedColumns = Object.keys(data[0]);
      this.dataSource = new MatTableDataSource(data);
      if (this.paginator) this.dataSource.paginator = this.paginator;
      if (this.sort) this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  sortData(event: Event) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    // if (this.sort.direction) {
    //   if (this._liveAnnouncer)
    //     this._liveAnnouncer.announce(`Sorted ${this.sort.direction}ending`);
    // } else {
    //   if (this._liveAnnouncer) this._liveAnnouncer.announce('Sorting cleared');
    // }
  }

  ngOnDestroy() {}
}
