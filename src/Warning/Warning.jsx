import React, { useRef } from 'react';
import './Warning.css';

function Warning(isPageVisible){

  return (
    <div className={isPageVisible == "ispejimai" ? 'mainWarningContainer' : 'mainWarningContainer hidden'}>

      
    </div>
  );
}

export default Warning;