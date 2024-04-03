import React, { useState, useEffect} from 'react';
import './SearchPage.css';
//import { Html5QrcodeScanner } from 'html5-qrcode';

function Searchpage({ isPageVisible }) {

    // const [scanResult, setScanResult] = useState(null)

    // useEffect(() => {

    //     const scanner = new Html5QrcodeScanner('reader', {
    //         qrbox: {
    //             width: 700,
    //             height: 700
    //         },
    //         fps: 20,
    //     });
    
    //     scanner.render(success, error);
    
    //     function success(QRresult){
    //         scanner.clear();
    //         setScanResult(QRresult)   
    //     }
    //     function error(){
    //         console.log(error)
    //     }
    // })

    

  return (
    // <div className={isSearchPageVisible ? 'mainSearchContainer' : 'mainSearchContainer hidden'}>
    // <div className='QRCodeScanner'>{scanResult ? <div>Success: <a href={"http://"+scanResult}>{scanResult}</a></div>
    // :<div id="reader"></div>}
    // </div></div>
    <></>
  );
}

export default Searchpage;