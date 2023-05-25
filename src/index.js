import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  ComponentA  from './ComponentA';
import ComponentB from './ComponentB';
import ButtonComponent from "./ButtonComponent";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentA />
    {/* <ComponentB /> */}
    <ButtonComponent />
    <App />
  </React.StrictMode>
);