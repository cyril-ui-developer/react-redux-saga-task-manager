import {ADD_TASK } from '../actions';

const initialState = {
  taskList: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      let newTaskList = [
        ...state.taskList,
        {
          ...action.taskItem
        }
      ];
      return {
        ...state,
        taskList: newTaskList
      };
    default:
      return state;
  }
}