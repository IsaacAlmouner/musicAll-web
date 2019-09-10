import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from './logo _colored_01.png';
import profileImg from './profile icon-01.png';
import '../../fonts/stylesheet.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <AppBar style={appBarStyle}>
                <Toolbar>
                    <Link to="/" >
                        <Button background="inherit" width="50px" style={profileBtnStyle}  >
                            <img src={logo} width="100px" />
                        </Button>
                    </Link>
                    <div style={{ flexGrow: 1 }}></div>
                    <Button background="inherit" width="50px" style={profileBtnStyle}  >
                        Profile
                        <img src={profileImg} width="50px" />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const appBarStyle = {
    flexGrow: 1,
    background: "#ffffff",
    paddingLeft: "50px",
    paddingRight: "50px",
    fontfamily: "bebas_neuebol"
}

const profileBtnStyle = {
    fontFamily: "bebas_neueregular",
    fontSize: "25px"
}

export default Header;
