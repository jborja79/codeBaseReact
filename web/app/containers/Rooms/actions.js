import { ADD_ROOM, GET_ROOMS, SET_ROOMS } from './constants';

export const addRoom = (payload) => ({
  type: ADD_ROOM,
  payload,
});

export const setRooms = (payload) => ({
  type: SET_ROOMS,
  payload,
});

export const getRooms = () => ({
  type: GET_ROOMS,
});
