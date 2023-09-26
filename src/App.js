import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("Light");
  const [alert,setAlert]=useState(null);

  function showAlert(message,type){
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function changeTheme(){
    if (mode==="Light") {
      setMode("Dark");
      document.body.style.background="linear-gradient(to right, #141e30, #243b55)";
      // document.body.style.background="linear-gradient(to right, #33001b, #ff0084)";
      showAlert("Dark Mode has been enabled.","success");
      document.title="Text Wizard - Dark Mode";
    }
    else{
      setMode("Light");
      document.body.style.background="linear-gradient(to right, #8e2de2, #4a00e0)";
      showAlert("Light Mode has been enabled.","success");
      document.title="Text Wizard - Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
     <Navbar title="Text Wizard" aboutText="About" mode={mode} toggleMode={changeTheme}  />
     <Alert alert={alert}/>
      <Routes>
        {/* /users -- component 1
            /users/home -- component 2, output will be component 1 if not used exact path
        */}
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/Text-Wizard" element={<TextForm heading="Enter the text to analyze below: " showAlert={showAlert} mode={mode}/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}
{/* <BrowserRouter>
	<Routes>
		<Route path='Path You want to use' element={<What you want to render >}/> 
		// Example-->  <Route path="/about" element={<About />}></Route>	
	</Routes>
</BrowserRouter> */}

export default App;
