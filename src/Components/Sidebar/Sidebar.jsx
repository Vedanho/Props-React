import React from "react";
import styles from "../Sidebar/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.list_item}>
            Гаджеты и аксессуары
          </a>
          <hr />
        </li>
        <li>
          <a href="#" className={styles.list_item}>
            Бытовая техника
          </a> 
          <hr />
        </li>
        <li>
          <a href="#" className={styles.list_item}>
            Прочее
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
