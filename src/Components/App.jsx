import React from "react";
import styles from "../Components/App.module.css";
import Head from "./Head/Head";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const App = () => {
  return (
    <div className={styles.main}>
      <Head />
      <div className={styles.body}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
