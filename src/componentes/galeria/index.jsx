import React, { useState } from 'react';
import Tags from '../tags';
import styles from './galeria.module.scss';
import fotos from './fotos.json';
import open from './open.png';
import favorito from './favorito.png';

export default function Galeria(){
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtrarFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        })

        setItens(novasFotos);
    }

    return(
        <section >
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
            <ul className={styles.galeria__cards}>
            {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="ícone coração de curtir" />
                <img src={open} alt="ícone de abrir modal" />
              </span>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
}