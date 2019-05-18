export const ADD_TASK = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';

// Add Task
export function addTask(title) {
  return {
    type: ADD_TASK,
    taskItem: {
      _id: (new Date().getTime()).toString(),
      title
    }
  };
}

// Load Tasks
export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}