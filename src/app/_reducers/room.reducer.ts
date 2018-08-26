import { Room } from './../room/room.model';
import * as RoomActions from './../_actions/room.actions';


// TODO: remove it (just to validate the code)
const initialRoomState: Room = {
  _id: '1',
  name: 'room1',
  numberOfPlayers: 2,
  state: 'open'
};

export function reducer(state: Array<Room> = [initialRoomState], action: RoomActions.Actions) {
  switch (action.type) {
    case RoomActions.ADD_ROOM:
      return [...state, action.payload];
    case RoomActions.REMOVE_ROOM:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
}
