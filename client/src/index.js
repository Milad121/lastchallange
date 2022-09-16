import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Home from './components/Home'
import ReportWebVitals from './ReportWebVitals';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<Home />);
//root.render(<Profile />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();