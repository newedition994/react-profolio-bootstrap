import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Developer and Websites promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Facebook Ads", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
