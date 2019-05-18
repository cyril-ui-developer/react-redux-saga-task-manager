import { connect } from 'react-redux';
import TaskList from '../components/TaskList';

const mapStateToProps = state => {
  return {
    taskList: state.taskList
  };
};

const TaskListContainer = connect(mapStateToProps)(TaskList);

export default TaskListContainer;