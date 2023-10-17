/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-10-16 16:26:06
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-10-16 22:11:07
 * @FilePath: \projecte:\学习\react\my-learn-react\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from './logo.svg';
import Todo from './todoList/todo.jsx'
import Counter from './editState/index'
// import listData from './assests/data.json'
import './App.css';

function App() {
  // const listArray = listData.todolist
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
      {/* {
        listArray.map((item, index) => <Todo data={item} key={index}/>)
      } */}
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
