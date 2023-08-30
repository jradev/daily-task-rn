import uuid from 'react-native-uuid';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const VIEW_TASK = 'VIEW_TASK';
export const DONE_TASK = 'DONE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = task => ({
  type: ADD_TASK,
  payload: {
    id: uuid.v4(),
    task,
  },
});

export const updateTask = (id, task) => ({
  type: UPDATE_TASK,
  payload: {
    id: id,
    task,
  },
});

export const viewTask = id => ({
  type: VIEW_TASK,
  payload: {
    id: id,
  },
});

export const doneTask = id => ({
  type: DONE_TASK,
  payload: {
    id: id,
  },
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: {
    id: id,
  },
});
