// src/pages/Assignment.js
import Layout from '../components/shared/Layout';
import '../App.css';
import React, {useState} from 'react';

function Assignment() {
  const [True, False] = useState(false);

  function onFocus(){
    False(value => !value); 
  }
  
  return (
    <Layout>
       <div class={True ? 'trueBox' : 'falseBox'}>
      {True ? 'True입니다' : 'False입니다'}
      </div>
    <br/>
    <button onClick={onFocus}>색바꾸기</button>
    </Layout>
  );
}

export default Assignment;