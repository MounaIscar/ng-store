import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from '../material/material.module';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminComponent, EditProductComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class AdminModule {}
