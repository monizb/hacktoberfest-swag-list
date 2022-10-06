import React from 'react';
import ReactDOM from 'react-dom';
import './OverlayModal.css';
const Backdrop = ()=>{
    return <div className='oh'></div>;
};
const OverlayModel = ()=>{
    return (        
        <>
           {ReactDOM.createPortal(<Backdrop/>,document.getElementById('backdrop-root'))}
        </>
    ); 
}
export default OverlayModel;