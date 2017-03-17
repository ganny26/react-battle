import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Navigation from './components/navcomponent';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import RouterC from './config/routes';
import User from './userComponents/userAdd';
import CounterParent from './userComponents/counter';

ReactDOM.render((
  <CounterParent/>
), document.getElementById('app'));