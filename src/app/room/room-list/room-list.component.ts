import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Room } from '../room.model';
import { AppState } from '../../app.state';
import * as RoomActions from '../../_actions/room.actions';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Observable<Room[]>;

  constructor(private store: Store<AppState>) {
    this.rooms = this.store.select('room');
  }

  ngOnInit() {
  }

}
