import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
const modules: Array<any> = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatTooltipModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules], // ...modules -> brings the elements in the array
  exports: modules,
})
export class MaterialModule {}
