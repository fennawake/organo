import './Footer.css'

import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='social'>
                <a href='#'><img src="./organo/image/fb.png" /></a>
                <a href='#'><img src="./organo/image/tw.png" /></a>
                <a href='#'><img src="./organo/image/ig.png" /></a>
            </div>
            <div className='logo'>
                <img src="./organo/image/logo.png" />
            </div>
            <div className='developed'>
                <p>Developed by Luiz Fernando Souza</p>
            </div>
        </footer>
    )
}
