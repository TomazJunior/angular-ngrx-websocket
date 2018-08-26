import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Room } from './room.model';
import * as RoomActions from '../_actions/room.actions';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Observable<Array<Room>>;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.rooms = store.select( s => s.room );
  }

  loadAll() {
    return this.http.get(environment.restAPI + environment.roomsEnpoint)
    .map((res: any) => {
        return res.data || [];
    })
    .map((payload: Array<Room> ) => {
        return { type: RoomActions.ADD_ROOMS, payload };
    })
    .subscribe((action) => {
        this.store.dispatch(action);
    });
  }
}
