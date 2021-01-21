import React from 'react'
import DisplayPicture from './DisplayPicture'
import HeaderSocialLinks from './HeaderSocialLinks'
import HeroText from './HeroText'
import styles from '../../styles/Header.module.scss'


function Header() {
    return (
        <div className={styles.mainHeader}>
            <div className="main-container">
                <HeaderSocialLinks />
                <DisplayPicture />
                <HeroText />
            </div>
        </div>
    )
}

export default Header
