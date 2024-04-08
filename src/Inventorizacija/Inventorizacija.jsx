import React, { useRef, useState } from 'react';
import './Inventorizacija.css'
import mobilusisTelefonasIcon from '../Prekes/Images/icons8-smartphone-100.png'
import monitoriusIcon from '../Prekes/Images/icons8-monitor-100.png'
import stacionarusKompiuterisIcon from '../Prekes/Images/pc.png'
import nesiojamasKompiuterisIcon from '../Prekes/Images/icons8-laptop-100.png'

import mobilusisTelefonasInventorizacija from './mobilusisTelefonasInventorizacija';

import './Inventorizacija.css'

function Inventorizacija({isPageVisible}){

    const [categoryVisibility, setCategoryVisibility] = useState("mobilusisTelefonas")

    const openMobilusisTelefonas = () => {
        setCategoryVisibility("mobilusisTelefonas")
    }
    const openNesiojamasKompiuteris = () => {
        setCategoryVisibility("nesiojamasKompiuteris")
    }
    const openMonitorius = () => {
        setCategoryVisibility("monitorius")
    }
    const openStacionarusKompiuteris = () => {
        setCategoryVisibility("stacionarusKompiuteris")
    }

    console.log(isPageVisible)
    
    return(
        <div className={isPageVisible == "inventorizacija" ? "labas" : 'hidden'}>
             <div className="recordHeader">
                <button className={`${categoryVisibility == "mobilusisTelefonas" ? "active" : ""} choise mobilusisTelefonas`} onClick={openMobilusisTelefonas}>
                    <img src={mobilusisTelefonasIcon} alt="" className='image'/>
                </button>
                <button className={`${categoryVisibility == "monitorius" ? "active" : ""} choise monitorius`} onClick={openMonitorius}>
                <img src={monitoriusIcon} alt="" className='image'/>
                </button>
                <button className={`${categoryVisibility == "stacionarusKompiuteris" ? "active" : ""} choise stacionarusKompiuteris`} onClick={openStacionarusKompiuteris}>
                <img src={stacionarusKompiuterisIcon} alt="" className='image'/>
                </button>
                <button className={`${categoryVisibility == "nesiojamasKompiuteris" ? "active" : ""} choise nesiojamasKompiuteriss`} onClick={openNesiojamasKompiuteris}>
                <img src={nesiojamasKompiuterisIcon} alt="" className='image'/>
                </button>
        </div>
        <div className={categoryVisibility == "mobilusisTelefonas" ? "" : "hidden"}>
        <mobilusisTelefonasInventorizacija/>

        </div>
        <div className={categoryVisibility == "monitorius" ? "" : "hidden"}>

        </div>
        <div className={categoryVisibility == "nesiojamasKompiuteris" ? "" : "hidden"}>

        </div>
        <div className={categoryVisibility == "stacionarus kompiuteris" ? "" : "hidden"}>

        </div>
    </div>
    )
}

export default Inventorizacija