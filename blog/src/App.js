// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import React, { useState } from 'react';

function App() {
  let nickName = "hhhhh";
  let [title, setTitle] = useState(['강남', '신촌']);
  let [like, setLike] = useState(0);

  let [flag, setFlag] = useState(false);

  function changeTitle() {
    let newTitle = [...title];
    newTitle[0] = '다 맛있지'
    setTitle(newTitle);
  };

  function onOff() {
    this.setFlag({ flag: !this.state.MyModal });
  };

  function toDay(){
    let todayNow = document.getElementById('date').value = new Data().toISOString().slice(4,7);
    let todayNow = document.getElementById('date').value = new Data().toISOString().slice(4,7);
    return todayNow;
  }


  // function countNumber() {
  //   let countLike = [...like];
  //   countLike = ['0', '0'];
  //   setLike(countLike)
  // }

  return (
    <div className="App">
      <div className='nav'>
        <div>하이고오오오오</div>
      </div>
      <div style={{ fontSize: "30px", color: "red" }}>
        {nickName} 님 어서오세요!!!
      </div>
      <div className='list'>
        <button onClick={changeTitle}>제목 변경</button>
        <h3 onClick={() => { setFlag(true) }}>{title[0]}  <span onClick={() => { setLike(like + 1) }}>💔</span>{like}</h3>
        <p>3월 30일 발행</p>
      </div>
      <div className='list'>
        <h3 onClick={() => { setFlag(true) }}> {title[1]}  <span onClick={() => { setLike(like + 1) }}>💔</span>{like}</h3>
        <p>3월 30일 발행</p>
      </div>

      <button onClick={onOff}>Modal On/Off</button>

      {
        flag === true
          ? <MyModal />
          : null
      }

    </div >

  );
}
function MyModal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
        <div><img src='./src/img/photo1.jpg' alt='photo1' /></div>
      </div>
    </>
  );
}
function MyComponent() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}
export default App;
