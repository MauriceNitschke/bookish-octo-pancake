import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <nav style={nav}>
                <ul>
                    <li style={nav_li}>
                        <Link style={linkStyle} to="/#">Sprache</Link> 
                    </li>
                    <li style={nav_li}>
                        <Link style={linkStyle} to="/about">Kontakt</Link> 
                    </li>
                </ul>
            </nav>

            <h1>WasGehtInBerlin</h1>
           
            <nav style={nav}>
            <ul>
                    <li style={nav_li}>
                        <Link style={linkStyle} to="/map">Stadtplan</Link> 
                    </li>
                    <li style={nav_li}>
                        <Link style={linkStyle} to="/login">Anmelden</Link> 
                    </li>
                </ul>
            </nav>

        </header>
    )
}

const headerStyle = {
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    background: '#333',
    color: '#fff',
    textAlign: 'center',
     
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'

}

const nav = {
        listStyle: 'none'
}

const nav_li = {
    display: 'inline-block',
    padding: '0px 20px',
  }


export default Header;
