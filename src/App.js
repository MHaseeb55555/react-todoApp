// // // import logo from './logo.svg';
// // // import image1 from '../assets./image.avif';
// // import { useState } from 'react'
// // import './App.css';

// // function App() {

// // //   // //================ TODO APP =================

// // //   let [text, setText] = useState('');
// // //   let [list, setList] = useState([]);

// // //   let add = () => {
// // //     list.push(text);
// // //     setList([...list]);
// // //     setText('');
// // //   }

// // //   let clear = () => {
// // //     setList([]);

// // //   };


// // //   let edit = (i) => {
// // //     let update = prompt('ENTER NEW VALUE');
// // //     list[i] = update;
// // //     setList([...list]);

// // //   }

// // //   let del = (i) => {
// // //     //  list[i]='';
// // //     list.splice(i, 1);
// // //     setList([...list]);


// // //   }



// // //   return (
// // //     <div style={{ textAlign: 'center', margin: '4em' }}>

// // //       <h1 style={{ background: 'blue', color: 'wheat' }}>TODO APP</h1>

// // //       <input value={text} onChange={(e) => setText(e.target.value)} />
// // //       <button style={{margin:'1em'}} onClick={add}>ADD</button>
// // //       <button onClick={clear}>DELETE ALL</button>

// // //       {list.map((x, i) => {


// // //         return (
// // //           <div>
// // //             <p key={i}>  {i + 1}. {x}
// // //               <button style={{margin:'1em'}} onClick={() => (del(i))}>DELETE</button>
// // //               <button onClick={() => (edit(i))}>EDIT</button> </p>



// // //           </div>

// // //         )
// // //       })}

// // // <br/><br/><br/><br/>

// // // <h1>========================================================================================</h1>

// // //     </div>
// // //   );



// // }

// // export default App;


// import React, { useState } from 'react';
// import Input from './components/Input';
// import Button from '../src/components/Button';
// // import Card from './components/card';
// import Select from './Select';
// // import Table from './components/Table';


// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [selectValue, setSelectValue] = useState('');

//   const array = [{
//     Input:
//     {
//       type: "text",
//       valeu: inputValue,
//       placeholder: "Enter Text",
//       onchange: (e) => setInputValue(e.target.value)
//     },
//     Button:
//     {
//       text: "Click me",
//       onchange: () => alert('Button clicked')
//     },
//     Select:
//     {
//       options: [
//         { label: 'Option 1', value: 'option1' },
//         { label: 'Option 2', value: 'option2' },
//         { label: 'Option 3', value: 'option3' },
//       ],
//       value: selectValue,
//       onChange: (e) => setSelectValue(e.target.value)
//     },
//     Card:
//     {
//       title: "Card Title",
//       image: logo,
//       content: "Some quick example text to build on the card title and make up the bulk of the card's content."
//     },
//     Table:
//     {
//       tableData: [
//         { Name: 'Ali', Age: 25 },
//         { Name: 'Ahmed', Age: 30 },
//         { Name: 'Saad', Age: 28 },
//       ]
//     },
//   }]

//   return (
//     <div className="container">
//       <div className="row">
//         <div className='col'>
//           {array?.map((item, i) => (
//             <React.Fragment>
//               <Input
//                 type={item.Input.type}
//                 placeholder={item.Input.placeholder}
//                 value={item.Input.value}
//                 onChange={item.Input.onchange}
//               />

//               <Button
//                 text={item.Button.text}
//                 onClick={item.Button.onchange}
//               />

//               <Select
//                 options={item.Select.options}
//                 value={item.Select.value}
//                 onChange={item.Select.onChange}
//               />

//               <Card
//                 title={item.Card.title}
//                 content={item.Card.content}
//                 image={item.Card.image}
//               />
//               <Table data={item.Table.tableData} />
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;