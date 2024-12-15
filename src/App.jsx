import './App.css'
import React, { useState } from "react";
import Icon from './Icon.jsx'
import windows from './assets/window.png'
import heart from './assets/heart.png'
import Window from './Window.jsx'
import Home from './Home.jsx'
import Cat from './Cat.jsx'
import Mood from './Mood.jsx'

function App() {
  const [currentSection, setCurrentSection] = useState("Home"); 
  const sectionTitles = {
    Home: "Welcome Home",
    Cats: "Love CATS",
    Mood: "Mood Board",
    Burning: "Contact Information",
    Diary: "Pretty incomplete tasks",
  };
  const handleNavClick = (section) => {
    setCurrentSection(section); 
  };

    return (
        <>
            <div className="app-container flex flex-row">
                <Icon />
                <div className="ml-5 flex justify-center items-center h-[70%]">
                  
                <div className="main-layout flex flex-col mx-5 my-10">
                <Window title={sectionTitles[currentSection]} />
                  <div className="flex flex-row">
                      <nav className="fixed-nav">
                        <button onClick={() => handleNavClick("Home")}>Home</button>
                        <button onClick={() => handleNavClick("Cats")}>Catssss</button>
                        <button onClick={() => handleNavClick("Mood")}>Moody</button>
                        <button onClick={() => handleNavClick("Burning")}>Burnin</button>
                        <button onClick={() => handleNavClick("Diary")}>Diary</button>
                      </nav>
                      <div className="content-area">
                        <div className="window-section">
                          {currentSection === "Home" && <Home className="home" />}
                          {currentSection === "Cats" && <Cat className='cat' />}
                          {currentSection === "Mood" && <Mood />}
                          {currentSection === "Burning" && <p>Contact details go here.</p>}
                          {currentSection === "Diary" && <p>Adjust your settings here.</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>            
                </div>
            <footer className='fixed bottom-0 left-0 w-full flex flex-row'>
              <button className="px-3 flex mr-3">
                <img src={windows} className='' alt="" />
                <div className="">Start</div>
              </button>
              <button id='world' className='px-3 flex flex-row'> <img  src={heart} alt="" />
                <span className='pl-3'>My World</span></button>
            </footer>
        </>
    )
}

export default App;
