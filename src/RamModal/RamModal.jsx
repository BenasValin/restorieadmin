import React, { useRef } from 'react';
import './RamModal.css'

function RamModal({ isRamPageVisible }){
    
    return(
        <>
        <div className={isRamPageVisible ? 'mainRamContainer  ' : 'mainRamContainer hidden'}>
            <div className='header'>


            </div>


            <div className='mainContainer'>
                <div className="recordHeader">
                <button className="choise mobilusisTelefonas">
                    
                </button>
                <button className="choise mobilusisTelefonas">
                    
                </button>
                <button className="choise mobilusisTelefonas">
                    
                </button>
                <button className="choise mobilusisTelefonas">
                </button>

                </div>
                <div className='records'>

                </div>

            </div>
        </div>
        </>
    )
}

export default RamModal