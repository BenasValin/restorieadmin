import React, { useRef } from 'react';
import './DezesModal.css';


function DezesModal({ isBoxPageVisible , createEmployee}) {
  const side1Ref = useRef(null);
  const side2Ref = useRef(null);
  const side3Ref = useRef(null);
  const pakRef = useRef(null);

  const newSide1Ref = useRef(null);
  const newSide2Ref = useRef(null);
  const newSide3Ref = useRef(null);
  const newQuantityRef = useRef(null);
  const newWarningRef = useRef(null);
  const newAlertRef = useRef(null)

  const clear = () => {
    side1Ref.current.value = '';
    side2Ref.current.value = '';
    side3Ref.current.value = '';
    pakRef.current.value = '';
  };

  const clearNewBox = () => {
    newSide1Ref.current.value = '';
    newSide2Ref.current.value = '';
    newSide3Ref.current.value = '';
    newQuantityRef.current.value = '';
    newAlertRef.current.value = '';
    newWarningRef.current.value = '';
  };

  return (
    <div className={isBoxPageVisible ? 'mainBoxContainer' : 'mainBoxContainer hidden'}>

      <div className='header'>

        <div className='optimalBoxSearchContainer'>
      
          <div>
          <p style={{ marginBottom: "0px", marginTop: "5px" }}><b>Optimalios dėžės paieška</b></p>
            <p style={{ fontSize: "13px", margin: "3px", color: "#d4d4d4" }}>pakuojamos prakės išmatavimai:</p>
            <input type="number" className='boxSearch' placeholder='1 kraštinė' ref={side1Ref} onChange={() => {}}/>
            <a > x </a>
            <input type="number" className='boxSearch' placeholder='2 kraštinė' ref={side2Ref} onChange={() => {}}/>
            <a > x </a>
            <input type="number" className='boxSearch'  placeholder='3 kraštinė' ref={side3Ref} onChange={() => {}}/>
            <a > cm</a>
          </div>

          <div>
            <p style={{ fontSize: "12px", marginBottom: "3px", color: "#d4d4d4", lineHeight: "14px", marginTop: "10px" }}>Papildomas būtinas paminkštinimo kiekis iš kiekvienos pusės</p>
            <input type="number" className='boxSearch' style={{width: "60%"}} placeholder='įpakavimas' ref={pakRef} />
            <a > cm</a>
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
              <input type="number" className='boxSearch' placeholder='1 kraštinė' ref={newSide1Ref} /><br></br>
              <a>2 Kraštinė: </a>
            <input type="number" className='boxSearch' placeholder='2 kraštinė'  ref={newSide2Ref}/><br></br>
            <a>3 Kraštinė: </a>
            <input type="number" className='boxSearch' placeholder='3 kraštinė' ref={newSide3Ref}/><br></br>
              </div>

              <div className >
                <a style={{ margin: "5px", paddingRight: "20px"}}>Esamas kiekis: </a>
                <input ref={newQuantityRef} type="number" className='boxSearch' style={{width: "50%"}} placeholder='Kiekis'/>

                <a style={{ margin: "5px", paddingRight: "20px"}}>Ispėjimo kiekis </a>
                <input ref={newAlertRef} type="number" className='boxSearch' style={{width: "50%"}} placeholder='Ispėjimas'/>

                <a style={{ margin: "5px", paddingRight: "20px"}}>Kritinis kiekis: </a>
                <input ref={newWarningRef} type="number" className='boxSearch' style={{width: "50%"}} placeholder='Kritinis'/>
              </div>

              <div className='boxEditButtons'>
                <button className='button' onClick={clearNewBox}><b>Išvalyti</b></button><br></br>
                <button className='button' style={{ marginTop: "5px"}} onClick={createEmployee}><b>+</b></button>
              
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default DezesModal;