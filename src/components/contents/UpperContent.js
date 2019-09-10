import React, { Component } from 'react'
import './UpperContent.css'
import ArtistsList from './ArtistList'
import '../../fonts/stylesheet.css'
import hittImg from './hit it-01.png'

export class UpperContent extends Component {
    render() {
        return (
            <div class={"flex-container-upper"} >
                <div style={{ padding: "30px", margin: "100px", marginTop: "200px", marginRight: "170px" }}>
                    <p style={{paddingLeft:"30px", color: "#ffffff", fontFamily: "bebas_neuebold",
                     fontSize: "55px", lineHeight: "50px" }} >AMP UP
                    <br /> THOSE DBS <br />
                    </p>
                    <p style={{fontSize:"25px", paddingLeft:"30px", fontFamily:"bebas_neuelight", 
                    color:"#ffffff" }} >MAKE MUSIC ON THE GO.</p>
                    <img src={hittImg} width="130px" style={{marginTop: "20px", float:"left" }} />
                </div>
                <div><ArtistsList /></div>
            </div>
        )
    }
}

export default UpperContent
