import './SSD.css'
import React, { useState, useEffect, useRef } from 'react';
import { deleteRecord, addRecord, getData } from '../recordActions/recordActions';

function SSD(){

    const [SSDFilter, setSSDFilter] = useState({id: '', gamintojas: '', modelis: '', jungtiestipas: '', talpa: '', isvalytas: ''});
    
    const [SSDData, setSSDData] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSSDFilter(prev => ({ ...prev, [name]: value }));
        console.log(SSDFilter)
      };

      useEffect(() => {
        updateSSD();
        console.log('efect')
      }, [SSDFilter]);
    
      
      const updateSSD = () => {
        getSSDData().then(data => {
            setSSDData(data);
        }).catch(error => console.error('Failed to fetch SSD Data', error));
      };

    const addSSD = () => {
      const SSD = {
        kategorija: "ssd",
        gamintojas: SSDFilter.gamintojas,
        modelis: SSDFilter.modelis,
        jungtiestipas: SSDFilter.jungtiestipas,
        talpa: SSDFilter.talpa,
        isvalytas: SSDFilter.isvalytas
      }
      addRecord(SSD)
    }


    const getSSDData = async () => {
      const SSD = {
        kategorija: "ssd",
        id: SSDFilter.id,
        gamintojas: SSDFilter.gamintojas,
        modelis: SSDFilter.modelis,
        jungtiestipas: SSDFilter.jungtiestipas,
        talpa: SSDFilter.talpa,
        isvalytas: SSDFilter.isvalytas
      }
  
      return getData(SSD)
  };

    
    
    function renderSSD(element){
        return (
            <div className="SSDcontainer">
                <a>{`Unikalus ID: ${element.id}`}</a><br></br>
                <a>{`Gamintojas: ${element.gamintojas}`}</a><br></br>
                <a>{`modelis: ${element.modelis}`}</a><br></br>
                <a>{`talpa: ${element.talpa}`}</a><br></br>

            </div>
        )
    }


    return(
        <>
        
        <div className="filterContainer">
          
        <button className="addRecord" onClick={addSSD}>
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
                <a>Išvalytas</a><br></br>
                <input className="filterinput" type="text" name="isvalytas" id="" onChange={handleChange}/>
            </div>
        </div>

        <div>
        {SSDData.map(renderSSD)}
        </div>
        </>
    )
}

export default SSD