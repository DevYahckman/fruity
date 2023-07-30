import React from "react";
import styles from "./loader.module.scss";

function Loader(props) {
  return (
    <div className={styles.loader}>
    <div className={styles.preLoader}></div>
    </div>
  );
}

export default Loader;
