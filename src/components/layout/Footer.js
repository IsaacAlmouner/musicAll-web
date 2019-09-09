import React from 'react';
import Logo from './logo white-01.png';
import './Footer.css'
import Button from '@material-ui/core/Button';
import '../../App.css';
import '../../fonts/stylesheet.css';

function Footer() {
    return (
        <div style={{ background: "#0f0f0a", color: "#ffffff", paddingTop: "30px", paddingLeft: "50px"}}>
            <div class="flex-container-column">
                <div class="flex-container" >
                    <div><img src={Logo} width="100px"/></div>
                    <div class="flex-container-column" >
                        <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff", marginLeft:"100px", fontFamily: "bebas_neueregular", fontSize: "17px" }}  >Profile</Button>
                        <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff", marginLeft:"100px", fontFamily: "bebas_neueregular", fontSize: "17px" }}  >Sign in</Button>
                        <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff", marginLeft:"100px", fontFamily: "bebas_neueregular", fontSize: "17px" }}  >music</Button>
                    </div>
                </div>
                <div>
                <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff",  fontFamily: "bebas_neuelight", fontSize: "15px" }}  >LEGAl</Button>
                <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff",  fontFamily: "bebas_neuelight", fontSize: "15px" }}  >PRIVACY CENTER</Button>
                <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff",  fontFamily: "bebas_neuelight", fontSize: "15px" }}  >PRIVACY POLICY</Button>
                <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff",  fontFamily: "bebas_neuelight", fontSize: "15px" }}  >COOKIES</Button>
                <Button background="inherit" width="50px" style={{ padding: "10px", color: "#ffffff",  fontFamily: "bebas_neuelight", fontSize: "15px" }}  >ABOUT ADS</Button>
                </div>
            </div>
        </div>
    )
};

export default Footer;
