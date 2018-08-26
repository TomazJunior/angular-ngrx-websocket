import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Room } from '../room.model';
import { AppState } from '../../app.state';
import * as RoomActions from '../../_actions/room.actions';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  public rooms: Observable<Array<Room>>;
  private subscription: Subscription;

  constructor(private store: Store<AppState>, private roomService: RoomService) {
    this.rooms = this.roomService.rooms;
  }

  ngOnInit() {
    this.subscription = this.rooms
    .subscribe(rooms => {
    }, error => {
        // Do something with error
        console.log('error', error);
    });

    this.roomService.loadAll();
  }

}
