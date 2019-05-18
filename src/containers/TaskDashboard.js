import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddTask from './AddTask';
import TaskListContainer from './TaskListContainer';

class TaskDashboard extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
          <h1>Task Manager</h1>
            <AddTask />
            <TaskListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TaskDashboard;