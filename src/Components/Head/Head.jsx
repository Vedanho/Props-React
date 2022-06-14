import React from 'react';
import img from "../../Photo/shop.jpg"
import styles from "../Head/Head.module.css"

const Head = () => {
    return (
        <div className={styles.head}>
            <h2>Intocode Coding Shopcamp</h2>
            <img src = {img} alt = "corsine" className={styles.img}></img>
        </div>
    );
};

export default Head;