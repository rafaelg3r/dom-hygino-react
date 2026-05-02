import { MoveRight } from "lucide-react";
import styles from "./styles.module.css";

import { HashLink as Link } from "react-router-hash-link";

type CardProps = {
  name: string;
  tagline: string;
  shortDescription: string;
  link: string;
  image: string;
};

const Card = ({ name, shortDescription, link, tagline, image }: CardProps) => {
  return (
    <>
      <Link className={styles.cardContainer} to={link} draggable="false">
        <div className={styles.cardImgContainer}>
          <div className={styles.backgroundFilter}></div>
          <div className={styles.gradientFilter}></div>
          <img
            src={image}
            alt={` Imagem da carne ${name.toLocaleLowerCase()}`}
          />
        </div>
        <div className={styles.textContainer}>
          <span>{tagline}</span>
          <strong>{name}</strong>
          <p className={styles.shortDescription}>{shortDescription}</p>
          <p className={styles.marmoreio}>MARMOREIO
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
             </p>
          <div className={styles.verDetalhes}>
            <p>Ver detalhes</p>
            <MoveRight />
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
