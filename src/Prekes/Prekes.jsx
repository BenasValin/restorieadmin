import React, { useRef } from 'react';
import './Prekes.css'
import mobilusisTelefonas from './Images/icons8-smartphone-100.png'
import monitorius from './Images/icons8-monitor-100.png'
import stacionarusKompiuteris from './Images/pc.png'
import nesiojamasKompiuteris from './Images/icons8-laptop-100.png'

function RamModal({isPageVisible}){
    
    return(
        <div style={{maxWidth: "100%"}}>
        <div className={isPageVisible == "prekes" ? 'mainRamContainer  ' : 'mainRamContainer hidden'}>
            <div className='headerPrekes'>
            
            </div>


            <div className='mainContainer'>
                <div className="recordHeader">
                <button className="choise mobilusisTelefonas aqw">
                    <img src={mobilusisTelefonas} alt="" className='image'/>
                </button>
                <button className="choise Nesiojamas kompiuteris">
                <img src={monitorius} alt="" className='image'/>
                </button>
                <button className="choise mobilusisTelefonas">
                <img src={stacionarusKompiuteris} alt="" className='image'/>
                </button>
                <button className="choise mobilusisTelefonas">
                <img src={nesiojamasKompiuteris} alt="" className='image'/>
                </button>

                </div>  
                <div className='records' style={{display: ""}}>
                </div>

            </div>
        </div>
        </div>
    )
}

export default RamModal