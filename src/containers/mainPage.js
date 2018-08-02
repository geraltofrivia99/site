import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import styled from 'styled-components';
// import Dash from './dashboard';
import Dash2 from './TopSec';

const Main = () => (
  <Switch>
    {/* <Route exact path='/' component={Login}/> */}
    <Route exact path='/' component={Dash2}/>
  </Switch>
);

export default (Main)
