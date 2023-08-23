// import logo from './logo.svg';
// import image1 from '../assets./image.avif';
import { useState } from 'react'
import './App.css';

function App() {

  // //================ TODO APP =================

  let [text, setText] = useState('');
  let [list, setList] = useState([]);

  let add = () => {
    list.push(text);
    setList([...list]);
    setText('');
  }

  let clear = () => {
    setList([]);

  };


  let edit = (i) => {
    let update = prompt('ENTER NEW VALUE');
    list[i] = update;
    setList([...list]);

  }

  let del = (i) => {
    //  list[i]='';
    list.splice(i, 1);
    setList([...list]);


  }



  return (
    <div style={{ textAlign: 'center', margin: '4em' }}>

      <h1 style={{ background: 'blue', color: 'wheat' }}>TODO APP</h1>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button style={{margin:'1em'}} onClick={add}>ADD</button>
      <button onClick={clear}>DELETE ALL</button>

      {list.map((x, i) => {


        return (
          <div>
            <p key={i}>  {i + 1}. {x}
              <button style={{margin:'1em'}} onClick={() => (del(i))}>DELETE</button>
              <button onClick={() => (edit(i))}>EDIT</button> </p>



          </div>

        )
      })}





    </div>
  );


}

export default App;
