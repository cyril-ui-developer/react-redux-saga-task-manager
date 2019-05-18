import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Task from './Task';

const TaskList = ({ taskList }) => (
  <Jumbotron>
    <ListGroup>
      {taskList.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </ListGroup>
  </Jumbotron>
);

TaskList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TaskList;