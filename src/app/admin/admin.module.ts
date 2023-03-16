import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, SharedModule],
  exports: [AdminComponent],
})
export class AdminModule {}
