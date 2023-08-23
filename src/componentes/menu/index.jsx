import React from "react";
import home from '../../assests/icones/home-ativo.png'
import curtidas from '../../assests/icones/mais-curtidas-inativo.png'
import vistas from '../../assests/icones/mais-vistas-inativo.png'
import novas from '../../assests/icones/novas-inativo.png'
import surpreenda from '../../assests/icones/surpreenda-me-inativo.png'
import styles from './menu.module.scss'

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="/">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={curtidas} alt="" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={vistas} alt="" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreenda} alt="" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}