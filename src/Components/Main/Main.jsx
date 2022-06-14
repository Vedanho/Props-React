import React from "react";
import products from '../../products'
import styles from "../Main/Main.module.css";
import Product from "../Product/Product";

const Main = () => {
  return (
    <div className={styles.main}>
      {products.map(item => {
        return (
            <Product img = {item.img} id = {item.id} price = {item.price} name = {item.name} />
        )
      })}
    </div>
  );
};

export default Main;
