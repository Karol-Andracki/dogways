import React from 'react';
import logo from '../images/logo.png'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <img src={logo}/>
            </div>
            <nav>
                Menu
            </nav>
        </header>
    )
}

