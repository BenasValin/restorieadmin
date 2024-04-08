import React, { useRef, useState } from 'react';
import './Komponentai.css'
import ssdIcon from './Images/ssd-card.png'
import ramIcon from './Images/ram.png'
import SSD from './SSD.jsx'
import RAM from './RAM.jsx'

function Komponentai({isPageVisible}){

    const [categoryVisibility, setCategoryVisibility] = useState("ssd")

    const openSSD = () => {
        setCategoryVisibility("ssd")
    }
    const openRAM = () => {
        setCategoryVisibility("ram")
    }
    
    return(
        <div className={isPageVisible == "komponentai" ? 'mainRamContainer  ' : 'mainRamContainer hidden'}>
            <div className='headerPrekes'>
            
            </div>
            <div className='mainContainer'>
                <div className="recordHeader">
                <button className={`${categoryVisibility == "ssd" ? "active" : ""} choise`} onClick={openSSD}>
                    <img src={ssdIcon} alt="" className='image'/>
                </button>
                <button className={`${categoryVisibility == "ram" ? "active" : ""} choise`} onClick={openRAM}>
                <img src={ramIcon} alt="" className='image'/>
                </button>

                </div>  

                
                    <div className='records'>
                    <div className={`${categoryVisibility == "ssd" ? "ssdRecordsContainer" : "hidden"} `}>
                        <SSD></SSD>
                    </div>
                    <div className={`${categoryVisibility == "ram" ? "ramRecordsContainer" : "hidden"} `}>
                        <RAM></RAM>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Komponentai