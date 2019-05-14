import React from 'react'
import NavBar from './Header/Navbar'
import Footer from './Footer/Footer'

export default function HeadFooter() {
    return (
        <div style={{ minHeight: "99vh", display: "flex", flexDirection: "column" }}>
        <NavBar/>
        <Footer/>
        </div>
    )
}
