//src/App.js
//json에서 받아온 데이터는 리액트에서 객체로 동작
//Route=링크생성, Routes는 Route를 묶어주는 컴포넌트
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Assignment from './pages/Assignment';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/assignment" element={<Assignment />} />
        </Routes>
    );
}

export default App;

/*
import './App.css';
import React, {useState} from 'react';

function App() {
const [True, False] = useState(false);

  function onFocus(){
    False(value => !value); 
  }
  
  return (
    <div>
      <div class={True ? 'trueBox' : 'falseBox'}>
      {True ? 'True입니다' : 'False입니다'}
      </div>
    <br/>
    <button onClick={onFocus}>색바꾸기</button>
    </div>
  );
}

export default App;
*/
