import PersonIcon from "@material-ui/icons/Person"
import ForumIcon from "@material-ui/icons/Forum"
import { IconButton } from '@material-ui/core';
import React from "react"
import TinderLogo from "../assets/tinder_logo.png"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src={TinderLogo} alt="Tinder Logo" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )

}

export default Header