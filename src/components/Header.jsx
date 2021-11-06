import React from "react";
import './header.css';
import logo from '../Images/uverse-logo.png';

import { Link } from 'react-router-dom';

function Header(props){
    return(
        <>
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>

            </div>

        
           
          
            <div className="avatar">
                    <img src={props.user.avatar}/>
                    <label className="login-google">{props.user.name}</label>
            </div>


            <nav>
                <ul>
                 
                    <li><Link  to ="/">Sair</Link></li>
                </ul>

               
            </nav>
        </header>
        </>
    )
}

export default Header;