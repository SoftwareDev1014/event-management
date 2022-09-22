import React from 'react'
import './index.modules.scss'
export default function LandingPage() {
    return <div className='landing-container'>
        <div className='root'>
            <div className="image-container">
                <img alt="landing page" src={require('../../assets/images/landing.png')} />
            </div>
            <div className="content">
                <div className='title-content'>
                    <div>Imaging if</div>
                    <div>Snapchat</div>
                    <div>Had events</div>
                </div>
                <div className='description'>
                    Easily host and share events with your friends across any social media.
                </div>
                <div className='btn white-text primary-gradient-bg right showDesktop'>
                    🎉 Create my event
                </div>
            </div>
        </div>
        <div className='btn white-text primary-gradient-bg center showTablet '>
            🎉 Create my event
        </div>
        <div className='btn white-text primary-gradient-bg center showMobile '>
            🎉 Create my event
        </div>
    </div>
}