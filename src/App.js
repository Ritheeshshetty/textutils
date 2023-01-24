import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {HashRouter,
  // BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      // #121212
      // #042743
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
  <>
  {/* <Navbar title="TextUtils" aboutText="AboutUtils" mode={mode} toggleMode={toggleMode} /> */}
  
  {/* <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/> */}

   {/* router setup */}
   <HashRouter>
    <Navbar title="TextUtils" aboutText="AboutUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
     <Routes>
        <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
        <Route exact path="/" element={<TextForm heading="Try TextUtils-word and character counter, Remove extra spaces."  mode={mode} showAlert={showAlert} />} />
      </Routes>
    </HashRouter>

  {/* <BrowserRouter>
    <Navbar title="TextUtils" aboutText="AboutUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
     <Routes>
        <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
        <Route exact path="/" element={<TextForm heading="Try TextUtils-word and character counter, Remove extra spaces."  mode={mode} showAlert={showAlert} />} />
      </Routes>
    </BrowserRouter> */}
    
  {/* <div className="container my-3" > */}
  {/* <TextForm showAlert={showAlert} heading="Enter the text to change words to uppercase or lowercase" mode={mode}/> */}
  {/* <About/> */}
  {/* </div> */}
  </>
  );
  
}

export default App;
