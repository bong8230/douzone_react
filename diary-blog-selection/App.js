/* eslint-disable */
import React from 'react';
import './App.css';
import MyComponents from './components/MyComponents'

function App() {
    return (
      <div>
          <p>안녕333</p>
          <MyComponents msg={"React!!!"}  age={27} />
          {/* <MyComponents age={100} /> */}
      </div>
    );
}

export default App;
