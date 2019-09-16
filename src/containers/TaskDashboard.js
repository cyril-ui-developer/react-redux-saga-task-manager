import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';

import AddTask from './AddTask';
import TaskListContainer from './TaskListContainer';
import Navigation from '../components/Navigation';

class TaskDashboard extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Task Manager</h1>
            <Navigation />
            <Route exact path="/" component={TaskListContainer} />
            <Route exact path="/new-task" component={AddTask} />
          </Col>
        </Row>
        =
      </Container>
    );
  }
}

export default TaskDashboard;
