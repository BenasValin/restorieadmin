import React, { useRef } from 'react';
import styles from './RamModal.css'

function RamModal({ isRamPageVisible }){
    
    return(
        <>
        <div className={isRamPageVisible ? 'mainRamContainer  ' : 'mainRamContainer hidden'}>
            <div className='header'>


            </div>
        </div>
        </>
    )
}

export default RamModal