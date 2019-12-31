import React from 'react'
import styles from '../../styles/Button1.module.css'

export default function Button1() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn}>
                <button type='button' className={styles.button}>About Us</button>
            </div>
        </div>
    )
}
