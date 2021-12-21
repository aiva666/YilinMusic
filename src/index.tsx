import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
// import './Mock/index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ConfigProvider locale={zhCN}>
      <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
