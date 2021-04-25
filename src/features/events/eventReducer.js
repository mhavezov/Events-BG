import {
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  UPDATE_EVENT,
} from './eventConstants';

const initialState = {
  events: [],
};

export default function eventReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter(evt => evt.id !== payload.id),
          payload,
        ],
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(evt => evt.id !== payload)],
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload,
      };
    default:
      return state;
  }
}
