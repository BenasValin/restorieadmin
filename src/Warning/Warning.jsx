import React, { useRef } from 'react';
import './Warning.css';

function Warning(isWarningPageVisible){

  return (
    <div className={isWarningPageVisible ? 'mainWarningContainer' : 'mainWarningContainer hidden'}>

      
    </div>
  );
}

export default Warning;