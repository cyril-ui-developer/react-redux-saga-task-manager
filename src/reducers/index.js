import {ADD_TASK } from '../actions';
import { RENDER_TODO_LIST } from '../actions';

const initialState = {
  taskList: []
};


export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        taskList: action.taskList
      };
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