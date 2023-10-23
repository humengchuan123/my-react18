/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-10-16 16:26:06
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-10-20 14:58:42
 * @FilePath: \projecte:\学习\react\my-learn-react\src\index.js
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Page from './page'
import reportWebVitals from './reportWebVitals';
document.documentElement.style.fontSize = 100 / 750 + 'vw'  //移动端视口配置rem

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <Page />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
