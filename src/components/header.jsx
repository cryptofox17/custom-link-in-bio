import React from 'react'
import image from '../images/headerImg.png'

const header = () => {
    return (
        <header>
            <img src={image} alt="illustration" id="header-img"/>
            <h1>cryptofox</h1>
            <p>I'm a designer and digital artist. You can find links to all my work here!</p>
        </header>
    )
}

export default header
