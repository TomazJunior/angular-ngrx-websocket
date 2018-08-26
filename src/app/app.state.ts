import { Room } from './room/room.model';

export interface AppState {
  readonly room: Room[];
}
