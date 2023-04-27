import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// antd/dist/antd.css is no longer in use so to reset some basic styles I imported reset.css from antd
import 'antd/dist/reset.css'  


ReactDOM.render(
<Router>
 <App />
</Router>,
document.getElementById('root')
)
    
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
