import { Routes } from '@angular/router';
import { RoomListComponent } from './room/room-list/room-list.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: 'rooms',
    component: RoomListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
