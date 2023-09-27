import React, { useState } from "react";
import Header from "./Header";

import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import { Home } from "./Home";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Form } from "./Form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { FeatureOverview } from "./Get Started/FeatureOverview";
import { Tutorial } from "./Get Started/Tutorial";
import Sidebar from "./Sidebar";
import { Examples } from "./Get Started/Examples";
import { FAQs } from "./Get Started/FAQs";
import { Footer } from "./Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        {/* <button onClick={toggleDarkMode} className="btn btn-primary">
        Toggle Dark Mode
      </button>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1> */}
        <BrowserRouter>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          {/* <Sidebar/> */}
          {/* <div className="wrapper">
   
     
    </div>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/FeatureOverview' element={<  FeatureOverview/>}/>
    
    </Routes> */}

          <div className="app">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/FeatureOverview" element={<FeatureOverview />} />
                <Route path="/Tutorial" element={<Tutorial />} />
                <Route path="/Examples" element={<Examples />} />
                <Route path="/FAQS" element={<FAQs />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
