import React from "react";
import git from "./git.png";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>

        <a href="https://github.com/Santegas" target="_blank">
          <img className={styles.git} src={git} alt="" />
        </a>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/santiago_mesmo/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Santiago</p>
    </footer>
  );
}