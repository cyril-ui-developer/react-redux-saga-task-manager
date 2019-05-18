import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import timeConverter from '../utils/timeConverter';

const Task = ({ _id, title }) => <ListGroup.Item>{timeConverter(_id)} : {title}</ListGroup.Item>;

Task.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Task;