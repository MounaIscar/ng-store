import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from '../material/material.module';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [AdminComponent, EditProductComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [AdminComponent],
})
export class AdminModule {}
