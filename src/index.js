import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

/*
const [, , light] = ["boots", "tent", "headlamp"]; //Array Destructing

console.log(light);

// conditional rendering
// Components to display based on a property - authorization

function SecretComponent() {
  return <h1>Secret information for authorized users only.</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>
}

// Second component - to display after first - to be included using Fragments
function AppTwo({ authorized }) {   // object destructing - authorized form props-obj
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
}

ReactDOM.render(
  <>
    <App />
    <AppTwo authorized={false} />     // passing a property to the props obj
  </>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <Router>
    <App login="danish-faisal" />
  </Router>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
