import './RAM.css'
import React, { useState, useEffect, useRef } from 'react';
import { deleteRecord, addRecord, getData } from '../recordActions/recordActions';

function RAM(){

    const [RAMFilter, setRAMFilter] = useState({id: '', gamintojas: '', modelis: '', jungtiestipas: '', talpa: '', isvalytas: ''});
    
    const [RAMData, setRAMData] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRAMFilter(prev => ({ ...prev, [name]: value }));
        console.log(RAMFilter)
      };

      useEffect(() => {
        updateRAM();
      }, [RAMFilter]);
    
      
      const updateRAM = () => {
        getRAMData().then(data => {
            setRAMData(data);
        }).catch(error => console.error('Failed to fetch RAM Data', error));
      };

    const addRAM = () => {
      const RAM = {
        kategorija: "ram",
        gamintojas: RAMFilter.gamintojas,
        modelis: RAMFilter.modelis,
        jungtiestipas: RAMFilter.jungtiestipas,
        talpa: RAMFilter.talpa,
        isvalytas: RAMFilter.isvalytas
      }
      addRecord(RAM)
    }


    const getRAMData = async () => {
      const RAM = {
        kategorija: "ram",
        id: RAMFilter.id,
        gamintojas: RAMFilter.gamintojas,
        modelis: RAMFilter.modelis,
        jungtiestipas: RAMFilter.jungtiestipas,
        talpa: RAMFilter.talpa,
        daznis: RAMFilter.daznis,
      }
  
      return getData(RAM)
  };

    
    
    function renderRAM(element){
        return (
            <div className="RAMcontainer">
                <a>{`Unikalus ID: ${element.id}`}</a>
                <a>{`Gamintojas: ${element.gamintojas}`}</a>
                <a>{`modelis: ${element.modelis}`}</a>
                <a>{`talpa: ${element.jungtiestipas}`}</a>
                <a>{`Gamintojas: ${element.talpa}`}</a>
                <a>{`Gamintojas: ${element.daznis}`}</a>
                <a>{`Gamintojas: ${element.kiekis}`}</a>

            </div>
        )
    }


    return(
        <>
        
        <div className="filterContainer">
          
        <button className="addRecord" onClick={addRAM}>
                +
                </button>
            <div className="filter">
                <a>UnikalusID</a><br></br>
                <input className="filterinput" type="text" name="id"  onChange={handleChange}/>
            </div>
            <div className="filter">
                <a>Gamintojas</a><br></br>
                <input className="filterinput" type="text" name="gamintojas"  onChange={handleChange}/>
            </div>
            <div className="filter">
                <a>Modelis</a><br></br>
                <input className="filterinput"type="text" name="modelis"  onChange={handleChange}/>
            </div>
            <div className="filter">
                <a>Jungties Tipas</a><br></br>
                <input className="filterinput" type="text" name="jungtiestipas"  onChange={handleChange}/>
            </div>
            <div className="filter">
                <a>Talpa</a><br></br>
                <input className="filterinput" type="text" name="talpa"  onChange={handleChange}/>
            </div>
            <div className="filter">
                <a>Dažnis</a><br></br>
                <input className="filterinput" type="text" name="daznis" id="" onChange={handleChange}/>
            </div>
        </div>

        <div>
        {RAMData.map(renderRAM)}
        </div>
        </>
    )
}

export default RAM