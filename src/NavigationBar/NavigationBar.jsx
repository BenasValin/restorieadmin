import React, {useState} from 'react'
import './NavigationBar.css'
import restorieLogo from './Images/Restorie_logo_main_white.png'
import boxIcon from './Images/box.png'
import ramIcon from './Images/ram.png'
import warningIcon from './Images/warning.png'
import SearchIcon from './Images/zoom.png'

function NavigationBar({setIsPageVisible}){
   
    const unhideBoxPage = () => {
        setIsPageVisible("dezes")
      };

    const unhidePrekesPage = () => {
        setIsPageVisible("prekes")
    }

    const unhideWarningPage = () => {
        setIsPageVisible("ispejimas")
    }

    const unhideSearchPage = () => {
        setIsPageVisible("paieska")
    }
    
    
    return(
    <>
        <nav className="navigationBarContainer">
            <div className='appName'>
                <img className="restorieLogo" src={restorieLogo}></img>
                <p className="restorieAdmin">Admin</p>
            </div>

            <div className='navigationIcons'>

            <button className='navButton' onClick={unhideBoxPage}>
                <img src={boxIcon} className='navIcon'/>
                Dėžės
            </button>

            <button className='navButton' onClick={unhidePrekesPage}>
                <img src={ramIcon} className='navIcon'/>
                Prekės
            </button>

            <button className='navButton' onClick={unhideWarningPage}>
                <img src={warningIcon} className='navIcon'/>
                Pranešimai
            </button>

            <button className='navButton' onClick={unhideSearchPage}>
                <img src={SearchIcon} className='navIcon'/>
                Paieška
            </button>
            

            </div>
        </nav>
    </>);

}

export default NavigationBar