import React from 'react'
import imagecom from './Components/imagecom';
import Imagecom from'./Components/imagecom'
import './App.css'

function renderImages() {
  let k = 5;
  let data = [];
  for(let i = 0; i < 5; i++) {
    data.push(<Imagecom/>);
  }
  return data;
}

function App(){
  return(
    <div className="box">
      {renderImages()}
    </div>
  )

  }
  
export default App