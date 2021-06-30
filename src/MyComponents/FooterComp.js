import React from 'react';

const footerStyle={
    position:"fixed",
    width:"100%",
    background:"#343a40",
    color:"#f8f9fa",
    padding:"15px",
    left:"0",
    bottom:"0"
}

export default function FooterComp() {
    return (
        <div className="text-center" style={footerStyle}>
           <h5>Convertor</h5>
        </div>
    )
}
