import React from 'react'
import styles from '../../styles/Button1.module.css'

export default function Button1(props) {
    return (
        
            <div className={styles.btn}>
                <button type='button' className={styles.button}>{props.children}</button>
            </div>
        
    )
}
