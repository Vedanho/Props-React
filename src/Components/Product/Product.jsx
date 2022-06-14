import React from 'react';
import styles from "../Product/Product.module.css"

const Product = (props) => {
    return (
        <div className={styles.card_div}>
            <ul className={styles.card_list}>
            <li><img src = {props.img} alt = "" className={styles.list_img}></img></li>
            <li>{props.id}</li>
            <li>{props.price}</li>
            <li>{props.name}</li>
            <li><button className={styles.button_buy}>Купить</button></li>
            </ul>
        </div>
    );
};

export default Product;