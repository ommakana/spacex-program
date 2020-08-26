import React from 'react';
import Home from './component/home/home';
import './App.scss';

export default (props) => {
  return <div className="outer_wrapper">
    <h1>{props.name}</h1>
    <Home />
  </div>;
};