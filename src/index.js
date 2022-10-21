import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contactus from './content/Contactus';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import About from './content/About';
import Term from './content/Term';
//import form from 'form.js';
//import Style from './Style.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
      <Routes>
       <Route path ="/" element={<App/>}/>
       <Route path ="/contact" element={<Contactus/>}/>  
       <Route path ="/about" element={<About/>}/>      
       <Route path ="/term" element={<Term/>}/>   
      </Routes>
    </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
