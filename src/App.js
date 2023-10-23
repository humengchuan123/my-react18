/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-10-16 16:26:06
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-10-18 18:40:27
 * @FilePath: \projecte:\学习\react\my-learn-react\src\App.js
 * @Description: 
 */
import logo from './logo.svg';
import CardForm from './cardFrom/index'
import Todo from './todoList/todo.jsx'
import Counter from './editState/index'
import listData from './assests/data.json'
import './App.css';
import { useState } from 'react';

function App() {
  const listDatas = listData.todolist
  const [listArray, setListArray] = useState(listDatas)
  const onChangeFromData = (e, data) => {
    if(e === 'emit') {
      // listArray.push(data)
      setListArray([...listArray, data])
    }
  }
  const deleteTodoItem = (index) => {
    setListArray(pre => {
      const newList = [...pre]
      newList.splice(index, 1)
      return newList
    })
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React233
        </a>
      </header> */}
      <img src={logo} className="App-logo" alt="logo" />
      <CardForm onEmit={onChangeFromData} />
      <Todo listArray={listArray} onDeleteItme={deleteTodoItem} />
      <Counter />
    </div>
  );
}

export default App;
