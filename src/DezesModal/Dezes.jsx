import React, { useState, useEffect, useRef } from 'react';
import './Dezes.css';
import box from '../NavigationBar/Images/box.png'
import trash from './Images/icons8-trash-96.png'
import edit from './Images/icons8-edit-50.png'
import qrcode from './Images/icons8-qr-code-100.png'
import { addRecord, deleteRecord, getData, editRecord } from '../recordActions/recordActions'
import { findAllInRenderedTree } from 'react-dom/test-utils';

var QRCode = require('qrcode')


function DezesModal({ isPageVisible, searchId}) {

  //-------------------------------------------------------REACT-HOOKS-----------------------------------------------------------------------------------------------

   const [dimensions, setDimensions] = useState({ id: searchId!=null? searchId : '', side1: '', side2: '', side3: '', pak: '' });
   const [newBoxDimensions, setNewBoxDimensions] = useState({ side1: '', side2: '', side3: '', kiekis: '', ispejimas: '' , kritinis: ''  });
   
   const [boxes, setBoxes] = useState([]);
   const [editingBoxId, setEditingBoxId] = useState(null);
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setDimensions(prev => ({ ...prev, [name]: value }));
   };

   const handleNewBoxChange = (e) => {
    const { name, value } = e.target;
    setNewBoxDimensions(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    updateBoxes();
  }, [dimensions]);


  const newIlgis = useRef();
  const newPlotis = useRef();
  const newAukstis = useRef();
  const newKiekis = useRef();
  const newIspejimas = useRef();
  const newKritinis = useRef();



//---------------------------------------------------------------REQUESTS------------------------------------------------------------------------------------------------


   const addNewBox = async () => {
    const box = {
      kategorija: "deze",
      ilgis: newBoxDimensions.side1,
      plotis: newBoxDimensions.side2,
      aukstis: newBoxDimensions.side3,
      kiekis: newBoxDimensions.kiekis,
      ispejimas: newBoxDimensions.ispejimas,
      kritinis: newBoxDimensions.kritinis
    }
    if (box.ilgis == '' || box.plotis == '' || box.aukstis == '' || box.kiekis  == '' || box.ispejimas  == ''|| box.kritinis  == '') {
      window.alert("Prašome užpildyti visus naujos dėžės laukelius :)");
      return;
    }
    else {
      addRecord(box)
      clearNewBox();
      updateBoxes();
    }
    
};

   const getOptimalBox = async () => {
    const box = {
      kategorija: "deze",
      id: dimensions.id,
      ilgis: dimensions.side1,
      plotis: dimensions.side2,
      aukstis: dimensions.side3,
      ipakavimas: dimensions.pak
    }
      return getData(box);
  
};


const handleSubmit = async (element) => {
  const updatedBox = {
    kategorija: "deze",
    id: element.id,
    ilgis: parseInt(newIlgis.value) || element.ilgis,
    plotis: parseInt(newPlotis.value) || element.plotis,
    aukstis: parseInt(newAukstis.value) || element.aukstis,
    kiekis: parseInt(newKiekis.value) || element.kiekis,
    ispejimas: parseInt(newIspejimas.value) || element.ispejimas,
    kritinis: parseInt(newKritinis.value) || element.kritinis,
  }
  editRecord(updatedBox).then(() => {updateBoxes()
  setEditingBoxId(null)})
};




//-------------------------------------------------RENDERING-LIST-OF-BOXES------------------------------------------------------------------------------------------------------------------------


const updateBoxes = () => {
  getOptimalBox().then(data => {
      setBoxes(data);
  }).catch(error => console.error('Failed to fetch boxes', error));
};

  function renderBox (element){

      const isEditing = element.id === editingBoxId;
      const startEditingBox = (id) => {
        if (editingBoxId == id){
          setEditingBoxId(null);
        }
        else setEditingBoxId(id);
    };

    const stopEditingBox = () => {
      setEditingBoxId(null);
  };

    return(
      <div className="boxContainer">
        <img className = "boxIcon" src={box} alt="" />
        <div className="boxismatavimai">
        <a >ilgis:<span className={isEditing ? "hide" : ""}>{element.ilgis}</span>
        <span><input ref={newIlgis} className={isEditing ? "" : "hide" } type="number" placeholder={element.ilgis} onChange={e => newIlgis.value = e.target.value}/></span></a>
        <a>plotis:<span className={isEditing ? "hide" : ""}>{element.plotis}</span>
        <span><input ref={newPlotis} className={isEditing ? "" : "hide" } type="number" placeholder={element.plotis} onChange={e => newPlotis.value = e.target.value}/></span></a>
        <a>aukstis:<span className={isEditing ? "hide" : ""}>{element.aukstis}</span>
        <span><input ref={newAukstis} className={isEditing ? "" : "hide" } type="number" placeholder={element.aukstis} onChange={e => newAukstis.value = e.target.value}/></span></a>
        </div>

        <div className="informacija">
        <a>Kiekis:<span className={isEditing ? "hide" : ""}>{element.kiekis}</span>
        <span><input ref={newKiekis} className={isEditing ? "" : "hide" } type="number" placeholder={element.kiekis} onChange={e => newKiekis.value = e.target.value}/></span></a>
        <a>Ispėjimas:<span className={isEditing ? "hide" : ""}>{element.ispejimas}</span>
        <span><input ref={newIspejimas} className={isEditing ? "" : "hide" } type="number" placeholder={element.ispejimas} onChange={e => newIspejimas.value = e.target.value}/></span></a>
        <a>Kritinis:<span className={isEditing ? "hide" : ""}>{element.kritinis}</span>
        <span><input ref={newKritinis} className={isEditing ? "" : "hide" } type="number" placeholder={element.kritinis} onChange={e => newKritinis.value = e.target.value}/></span></a>
        <a>Unikalus ID: {element.id}</a>
        </div>

        <div className="actions">
          <button className='delete'
           onClick={() => deleteRecord(element.id).then(setTimeout(() => {
            updateBoxes()
           }, 100))}>
            <img className='trashIcon' src={trash} alt="" />
          </button>
          <button className='delete' onClick={() => startEditingBox(element.id)}>
            <img className='trashIcon' src={edit} alt="" />
          </button>

          <button className='delete qrcode' onClick={() => createQRCode(element)}>
            <img className='trashIcon' src={qrcode} alt="" />
          </button>
          <button className={isEditing ?  "delete" : "hide"} onClick={() => handleSubmit(element)}>
            Ok
          </button>
          <button className={isEditing ?  "delete" : "hide"} onClick={stopEditingBox}>
            Atšaukti
          </button>
        </div>
        
      </div>
    )
  }

  //-----------------------------------------------QR-CODE-GENERATION--------------------------------------------------
  function createQRCode(element) {
    QRCode.toDataURL(`http://192.168.1.167:3000/?id=${element.id}`, {width: 200, margin: 1}, function (err, url) {
        if (err) throw err;

        // Create an iframe element
        let iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.width = '210px'; // Adjusted to accommodate the QR code width plus some padding
        iframe.style.height = '250px'; // Adjusted to accommodate the QR code height plus text
        iframe.style.left = '-9999px'; // Hide the iframe off-screen

        document.body.appendChild(iframe);
        iframe.onload = function() {
            let content = `<div style="text-align: left;">
                               <img src="${url}" width="200" height="200" style="margin-bottom: 3px;">
                               <p>Unikalus ID: ${element.id} </p>
                               <a>Kategorija: Dėžė </a><br>
                               <a>Ilgis: ${element.ilgis}</a><br>
                               <a>Ilgis: ${element.plotis}</n><br>
                               <a>Aukstis: ${element.aukstis}</a>
                           </div>`;

            iframe.contentWindow.document.body.innerHTML = content;
            setTimeout(() => {
              
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            }, 200);


            setTimeout(() => document.body.removeChild(iframe), 1000);
        };
        document.body.appendChild(iframe);
    });
};

  
  //-----------------------------------------------INPUT-BOX-ClEARING-------------------------------------------------------------------------------------------------------------------------

  function clear(){
    setDimensions({ id: '', side1: '', side2: '', side3: '', pak: '' });
    };

  function clearNewBox(){
    setNewBoxDimensions({ side1: '', side2: '', side3: '', kiekis: '', ispejimas: '', kritinis: '' });
    
  };

//---------------------------------------------------------------RETURN--------------------------------------------------------------------------------------------------------

  return (
    <div className={isPageVisible == "dezes" ? 'mainBoxContainer' : 'mainBoxContainer hidden'}>

      <div className='header'>

        <div className='optimalBoxSearchContainer'>
      
          <div>
          <p style={{ marginBottom: "0px", marginTop: "5px" }}><b>Optimalios dėžės paieška</b></p>
          <p style={{ fontSize: "13px", margin: "3px", color: "#d4d4d4" }}>pakuojamos prakės išmatavimai:</p>

            <input 
            type="number" 
            name="side1" 
            className='boxSearch' 
            placeholder='1 kraštinė (cm)' 
            value={dimensions.side1} 
            onChange={handleChange}/>

            <input 
            type="number" 
            name="side2" 
            className='boxSearch' 
            placeholder='2 kraštinė (cm)' 
            value={dimensions.side2} 
            onChange={handleChange}/>

            <input 
            type="number" 
            name="side3" 
            className='boxSearch'  
            placeholder='3 kraštinė (cm)' 
            value={dimensions.side3} 
            onChange={handleChange}/>
          </div>

          <div>
              <p style=
              {{ 
              fontSize: "12px", 
              marginBottom: "3px", 
              color: "#d4d4d4", lineHeight: 
              "14px", 
              marginTop: "10px"
              }}>

              Papildomas būtinas paminkštinimo kiekis iš kiekvienos pusės
              </p>

              <input 
              type="number" 
              name="pak" 
              value={dimensions.pak} 
              className='boxSearch' 
              style={{width: "60%"}} 
              placeholder='įpakavimas (cm)' 
              onChange={handleChange}/>
              
              <p style=
              {{ 
              fontSize: "12px", 
              marginBottom: "3px", 
              color: "#d4d4d4", lineHeight: 
              "14px", 
              marginTop: "10px"
              }}>
              Paieška pagal ID
              </p>

              <input 
              type="number" 
              name="id"
              value={dimensions.id} 
              className='boxSearch' 
              style={{width: "60%"}} 
              placeholder='ID pvz.: 264' 
              onChange={handleChange}/>
              
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className='button' onClick={clear}><b>Išvalyti</b></button>
          </div>

        </div>

        <div className='boxEditContainer'>
            <p style={{textAlign: "center", margin: "0px"}}><b>Pridėti naujų Dėžių</b></p>
            <div className='boxEdit'>
              <div className='newBoxDimensios'>
                <p style={{ margin: "5px"}}>Naujos dėžės išmatavimai</p>
                <a>1 Kraštinė: </a>
              <input
              type="number"
              className='boxSearch'
              placeholder='1 kraštinė'
              name="side1"
              value = {newBoxDimensions.side1}
              onChange={handleNewBoxChange}
                   />
                   <br></br>
              <a>2 Kraštinė: </a>
            <input
            type="number"
             className='boxSearch'
            placeholder='2 kraštinė'
            name="side2"
            value = {newBoxDimensions.side2}
            onChange={handleNewBoxChange}/>
                  <br></br>
            <a>3 Kraštinė: </a>
            <input
            type="number"
            className='boxSearch'
            placeholder='3 kraštinė'
            name="side3"
            value = {newBoxDimensions.side3}
            onChange={handleNewBoxChange}/>
                  <br></br>
              </div>

              <div className >
                <a style={{ 
                  margin: "5px", 
                  paddingRight: "20px"}}>
                  Esamas kiekis: 
                </a>
                <input 
                  type="number" 
                  className='boxSearch' 
                  style={{width: "50%"}}  
                  name="kiekis"
                  value = {newBoxDimensions.kiekis} 
                  onChange={handleNewBoxChange}
                  placeholder='Kiekis'/>

                <a 
                  style={{ 
                  margin: "5px", 
                  paddingRight: "20px"}}>
                  Ispėjimo kiekis 
                </a>
                <input 
                  type="number" 
                  className='boxSearch' 
                  style={{width: "50%"}}
                  name="ispejimas"
                  value = {newBoxDimensions.ispejimas} 
                  onChange={handleNewBoxChange}
                  placeholder='Ispėjimas'/>

                <a 
                  style={{ 
                  margin: "5px", 
                  paddingRight: "20px"}}>
                  Kritinis kiekis:
                </a>

                <input 
                type="number" 
                className='boxSearch' 
                style={{width: "50%"}}
                name="kritinis" 
                value = {newBoxDimensions.kritinis}
                onChange={handleNewBoxChange} 
                placeholder='Kritinis'/>
              </div>

              <div className='boxEditButtons'>
                <button className='button' onClick={clearNewBox}><b>Išvalyti</b></button><br></br>
                <button className='button' style={{ marginTop: "5px"}} onClick={addNewBox}><b>+</b></button>
              </div>

            </div>
        </div>
      </div>

      <div>
        {boxes.map(renderBox)}
      </div>

    </div>
  );
}


export default DezesModal;