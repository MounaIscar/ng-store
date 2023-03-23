import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/admin/components/admin/admin.component';
import { HomeComponent } from 'src/app/home/components/home/home.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();

  routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: '', component: HomeComponent },
  ];

  //   constructor(private router: Router, private route: ActivatedRoute) {}

  // go() {
  //   this.router.navigate(['home'], { relativeTo: this.route });
  // }
  // }

  //   goTo(path: string,component: string) {
  //     this.router.navigate([path], { relativeTo: component });
  //     this.router.navigate(['/', 'users']);
  //   }

  public closeSidebar(): void {
    this.onCloseSidebar.emit();
  }
}
