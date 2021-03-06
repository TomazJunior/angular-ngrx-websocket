import { Action } from '@ngrx/store';
import { Room } from './../room/room.model';

export const ADD_ROOMS      = '[ROOM] Add List';
export const ADD_ROOM       = '[ROOM] Add';
export const REMOVE_ROOM    = '[ROOM] Remove';

export class AddRoom implements Action {
  readonly type = ADD_ROOM;

  constructor(public payload: Room) {}
}

export class AddRooms implements Action {
  readonly type = ADD_ROOMS;

  constructor(public payload: Array<Room>) {}
}

export class RemoveRoom implements Action {
  readonly type = REMOVE_ROOM;

  constructor(public payload: string) {}
}

export type Actions = AddRoom | RemoveRoom | AddRooms;
