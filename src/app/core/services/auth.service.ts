import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from 'src/app/shared/models/user.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth$: Subject<boolean> = new Subject();
  constructor(private storageService: StorageService) {}

  public login(user: IUser): void {
    if (user) {
      this.storageService.setData('user', user);
      this.isAuth$.next(true);
    }
  }

  public getUser(): IUser {
    const user: IUser = this.storageService.getData('user');
    return user;
  }
}
