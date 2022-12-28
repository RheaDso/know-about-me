import './App.css';
import {BrowserRouter, BrowserRouter as Router,Route,Routes,useRoutes} from "react-router-dom";
import Main from './main';
import Heart from './components/heart';
import Home from './components/home';
import Page1 from './components/page1';
import Page2 from './components/page2';
import No from './components/no';
import Yes from './components/yes';
import Page3 from './components/page3';
import Last from './components/last';

function App() {
  return (
    <BrowserRouter>
        <Routes>  
          <Route path='/yes' element={<Yes/>}/>
          <Route path='/no' element={<No/>}/>
          <Route path='/' element={<Main/>}/>
          <Route path='/heart' element={<Heart/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Page1' element={<Page1/>}/>
          <Route path='/Page2' element={<Page2/>}/>
          <Route path='/Page3' element={<Page3/>}/>
          <Route path='/last' element={<Last/>}/>
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
