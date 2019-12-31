import React from 'react';
import styles from '../styles/Home.module.css';
import logo from '../images/logo.png'
import Button from './UI elements/Button';

export default function Home() {
    return (
        <>
            <div className={styles.img1}>
                <div className={styles.title1}>
                    <span className={styles.spanText}>
                        Welcome to <img src={logo} className={styles.heroImg}/> <br />



                    </span>
                </div>
            </div>
            <section className={styles.section}>
                <h2>Our mission</h2>
                <p>
                    At the DogsWays we place the right relationship between the owner(s) and the dog(s) central. We don’t use any intimidation or dominance-based methods. We passionately believe that the dog’s welfare benefits from increased education and aims to provide this by offering scientifically up-to-date information.
         
                </p>
                
            </section>
            <div className={styles.img2}>
                <div className={styles.title}>
                    <span className={styles.spanText}>
                        Our services
            </span>
                </div>
            </div>
            <section className={styles.section}>
                <h2>section two</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe provident numquam labore maxime voluptates facilis placeat non necessitatibus, eius maiores nisi? In recusandae illo debitis placeat laudantium maiores nobis, laborum rem, ea dicta blanditiis vero facilis sint incidunt earum cupiditate? Consequatur nemo neque hic dignissimos, quos tempore nisi atque!
        </p>
            </section>
            <div className={styles.img3}>
                <div className={styles.title}>
                    <span className={styles.spanText}>
                        Shop
            </span>
                </div>
            </div>
            <section className={styles.section}>
                <h2>section three</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe provident numquam labore maxime voluptates facilis placeat non necessitatibus, eius maiores nisi? In recusandae illo debitis placeat laudantium maiores nobis, laborum rem, ea dicta blanditiis vero facilis sint incidunt earum cupiditate? Consequatur nemo neque hic dignissimos, quos tempore nisi atque!
        </p>
            </section>
            <div className={styles.img4}>
                <div className={styles.title}>
                    <span className={styles.spanText}>
                        Blog
            </span>
                </div>
            </div>
            <section className={styles.section}>
                <h2>section one</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe provident numquam labore maxime voluptates facilis placeat non necessitatibus, eius maiores nisi? In recusandae illo debitis placeat laudantium maiores nobis, laborum rem, ea dicta blanditiis vero facilis sint incidunt earum cupiditate? Consequatur nemo neque hic dignissimos, quos tempore nisi atque!
        </p>
            </section>
        </>
    )
}
