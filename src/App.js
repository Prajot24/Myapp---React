
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
  //   <Router>
    
  //     <Navbar/>
    
  //       <Switch>
  //         <Route path="/about">
  //           <About/>
  //         </Route> 
  //         <Route path="/">
            
  //             <TextForm title = 'Enter Your Text Here'></TextForm>
            
  //         </Route>
  //       </Switch>
    
  // </Router>
      <BrowserRouter>
      <Navbar/>
      <div className='container'>
          <Routes>
            
            <Route path="/" className='conatainer' element={<TextForm title = 'Enter Your Text Here'  ></TextForm>}  />
            
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
