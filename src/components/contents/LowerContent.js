import React from 'react'
import Button from '@material-ui/core/Button';

function LowerContent() {
    return (
        <div style={{ margin: "100px" }}>
            <p style={{
                color: "#111111", fontFamily: "bebas_neuebold", fontSize: "55px", marginBottom: "20px"
            }} >
                GET PRODUCTION WITH MUSICDB<br />
            </p>
            <p style={{
                fontSize: "25px", fontFamily: "bebas_neuebold",
                color: "#111111"
            }} >PICK YOUR PREFERED INSTRUMENT</p>
            <p style={{
                fontSize: "16px", fontFamily: "bebas_neueregular",
                color: "#111111"
            }} >PICK THE INSTRUMENT YOU NEED TO COMPOSE YOUR PIECE</p>
            <Button style={{
                fontSize: "20px", fontFamily: "bebas_neuebold",
                color: "#ff1a75", padding: "0px", marginTop: "20px" 
            }} > START COMPOSING </Button>
        </div>
    )
}

export default LowerContent