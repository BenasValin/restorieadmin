import './MobilusisTelefonas.css'
import React, { useState, useEffect, useRef } from 'react';

function MobilusisTelefonas(){


    const [mobilusisTelefonasData, setMobilusisTelefonasData] = useState([]);
    
    function renderMobilusisTelefonas(element){
        return (
            <div className="div">

            </div>
        )
    }

    return(
        <>
        <div className="filterContainer">
            <div className="filter">
                <a>UnikalusID</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Gamintojas</a><br></br>
                <input className="filterinput" type="text" name="" id="" />
            </div>
            <div className="filter">
                <a>Modelis</a><br></br>
                <input className="filterinput"type="text" name="" id="" />
            </div>
            <div className="filter">
                <a>Versija</a><br></br>
                <input className="filterinput" type="text" name="" id="" />
            </div>
            <div className="filter">
                <a>Serijos numeris/IMEI</a><br></br>
                <input className="filterinput" type="text" name="" id="" />
            </div>
            <div className="filter">
                <a>Fizinė būklė</a><br></br>
                <input className="filterinput" type="text" name="" id="" />
            </div>
            <div className="filter">
                <a>Komentaras</a><br></br>
                <input className="filterinput" type="text" name="" id="" />
            </div>
            <div className="filter">
                <a>Kokybės kontrolė</a><br></br>
                <input className="filterinput" type="text" name="" id="" />
            </div>
            <div className="filter">
                <a>Paruoštas šiandien</a><br></br>
                <input className="filterinput" type="checkbox" name="" id="" />
            </div>
            <div className="filter">
                <a>Procesorius (CPU)</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Operatyvioji atmintis (RAM)</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Kietasis diskas</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Galinės kameros raiška (Pagrindinės)</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Priekinės kameros raiška (Pagrindinės)</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Piršto antspaudo skaitytuvas</a><br></br>
                <input className="filterinput" type="checkbox" name="" id="" />
            </div>
            <div className="filter">
                <a>Ekrano įstrižainė</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Maksimali rezoliucija</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>Krovimo jungtis</a><br></br>
                <input className="filterinput" type="number" name="" id="" />
            </div>
            <div className="filter">
                <a>3,5mm audio jungtis</a><br></br>
                <input className="filterinput" type="checkbox" name="" id="" />
            </div>

        </div>

        <div>
        {mobilusisTelefonasData.map(renderMobilusisTelefonas)}
        </div>
        </>
    )
}

export default MobilusisTelefonas