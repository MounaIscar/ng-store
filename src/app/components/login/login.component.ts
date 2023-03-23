import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user: IUser[] = [];
  public hide: boolean = true;

  public onSubmit(loginForm: NgForm): void {
    console.log(loginForm);
    if (loginForm.valid) {
    }

    this.clear();
  }

  public login() {}
  clear() {
    this.clear();
  }
}
