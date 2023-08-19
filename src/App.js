// import logo from './logo.svg';
// import image1 from '../assets./image.avif';
import { useState } from 'react'
import './App.css';

function App() {

  // //================ TODO APP =================

  let [text, setText] = useState('');
  let [list, setList] = useState([]);

  let update = () => {
    list.push(text);
    setList([...list]);
  }


  let edit = () => {
    let update = prompt('ENTER NEW VALUE')

  }

  let dlt = (x) => {
    x.value = '';


  }



  return (
    <div style={{textAlign:'center'}}>

      <h1 style={{background:'blue',color:'wheat'}}>TODO APP</h1>

      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={update}>ADD</button>

      {list.map((x, i) => {


        return (
          <div>
            <p key={i}>  {i + 1}. {x} <button onClick={dlt}>DELETE</button> <button onClick={edit}>EDIT</button> </p>



          </div>

        )
      })}





    </div>
  );


}

export default App;
