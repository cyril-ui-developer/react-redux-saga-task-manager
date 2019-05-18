export const ADD_TASK = 'ADD_TODO';

export function addTask(title) {
  return {
    type: ADD_TASK,
    taskItem: {
      _id: (new Date().getTime()).toString(),
      title
    }
  };
}