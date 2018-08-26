import { Room } from './../room/room.model';
import * as RoomActions from './../_actions/room.actions';


export function reducer(state: Array<Room>, action: RoomActions.Actions) {
  switch (action.type) {
    case RoomActions.ADD_ROOMS:
      return action.payload;
    case RoomActions.ADD_ROOM:
      return [...state, action.payload];
    case RoomActions.REMOVE_ROOM:
      return state.filter((room) => room._id !== action.payload);
    default:
      return state;
  }
}
