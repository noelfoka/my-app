import logo from './logo.svg';
import React from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Side from './components/Side';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  return (
    <div>
      <div className="text-center bg-primary h-400">
      <Header />
      </div>
      <div className='row'>
        <div className="col-md-6 text-center bg-danger">
          <Main />
        </div>
        <div className="col-md-6 text-center bg-secondary">
          <Side />
        </div>
      </div>
    </div>
  );
}

export default App;
