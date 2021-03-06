import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;


export default () => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      Task List
    </Link>
    <Link className="btn btn-secondary" to="/new-task">
      + Add New Task
    </Link>
    {/* comment one */}
  </NavigationBar>
);