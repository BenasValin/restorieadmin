import React, {useState} from 'react'
import './NavigationBar.css'
import restorieLogo from './Images/Restorie_logo_main_white.png'
import boxIcon from './Images/box.png'
import ramIcon from './Images/ram.png'
import warningIcon from './Images/warning.png'
import SearchIcon from './Images/zoom.png'
import InventorizacijaIcon from './Images/inventory.png'
import Komponentai from '../Komponentai/Komponentai.jsx'
import prekesIcon from './Images/laptop.png'

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
    const unhideInventorizacijaPage = () => {
        setIsPageVisible("inventorizacija")
    }
    const unhideKomponentaiPage = () => {
        setIsPageVisible("komponentai")
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
                <img src={prekesIcon} className='navIcon'/>
                Prekės
            </button>
            <button className='navButton' onClick={unhideKomponentaiPage}>
                <img src={ramIcon} className='navIcon'/>
                Komponentai
            </button>

            <button className='navButton' onClick={unhideWarningPage}>
                <img src={warningIcon} className='navIcon'/>
                Pranešimai
            </button>

            <button className='navButton' onClick={unhideSearchPage}>
                <img src={SearchIcon} className='navIcon'/>
                Paieška
            </button>

            <button className='navButton' onClick={unhideInventorizacijaPage}>
                <img src={InventorizacijaIcon} className='navIcon'/>
                Inventorizacija
            </button>
            

            </div>
        </nav>
    </>);

}

export default NavigationBar