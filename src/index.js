import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

function SecretComponent() {
  return <h1>Secret information for authorized users only.</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>
}

function AppTwo(props) {
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
}

ReactDOM.render(
  <>
    <App />
    <AppTwo authorized={true} />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
