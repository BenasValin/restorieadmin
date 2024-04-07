import React, { useRef, useState } from 'react';
import './Prekes.css'
import mobilusisTelefonasIcon from './Images/icons8-smartphone-100.png'
import monitoriusIcon from './Images/icons8-monitor-100.png'
import stacionarusKompiuterisIcon from './Images/pc.png'
import nesiojamasKompiuterisIcon from './Images/icons8-laptop-100.png'

import MobilusisTelefonas from './MobilusisTelefonas';

function RamModal({isPageVisible}){

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
    
    return(
        <div className={isPageVisible == "prekes" ? 'mainRamContainer  ' : 'mainRamContainer hidden'}>
            <div className='headerPrekes'>
            
            </div>


            <div className='mainContainer'>
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
                    <div className='records'>
                    <div className={`${categoryVisibility == "mobilusisTelefonas" ? "mobilusisTelefonasRecordsContainer" : "hidden"} `}>
                        <MobilusisTelefonas></MobilusisTelefonas>
                    </div>
                    <div className={`${categoryVisibility == "monitorius" ? "monitoriusRecordsContainer" : "hidden"} `}>
                        
                    </div>
                    <div className={`${categoryVisibility == "stacionarusKompiuteris" ? "stacionarusKompiuterisRecordsContainer" : "hidden"} `}>
                        
                    </div>
                    <div className={`${categoryVisibility == "nesiojamasKompiuteris" ? "nesiojamasKompiuterisRecordsContainer" : "hidden"} `}>
                        
                    </div>
                </div>



            </div>
        </div>
    )
}

export default RamModal