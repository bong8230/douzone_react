/* eslint-disable */
import React from 'react';
import './App.css';
import MyComponents from './Component/MyComponents';
import MyComponentFunc from './Component/MyComponentFunc';


function App() {
  return (
    <div>
      <p>안녕333</p>
      <MyComponents msg={"React!!!"} age={27} />
      <MyComponents age={100} />
      <MyComponents hi={"React!!!"} age={27} />
      {/* <MyComponents age={100} /> */}
    </div>
  );
}

export default App;
