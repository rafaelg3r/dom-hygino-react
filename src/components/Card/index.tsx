import { MoveRight } from "lucide-react";
import styles from "./styles.module.css";

import { HashLink as Link } from "react-router-hash-link";
import { useCurrentLine } from "../../utils/currentLine";

type CardProps = {
  name: string;
  tagline: string;
  shortDescription: string;
  link: string;
  image: string;
  marbling: number;
  softness: number;
};

const Card = ({
  name,
  shortDescription,
  link,
  tagline,
  image,
  marbling,
  softness,
}: CardProps) => {
  const currentLine = useCurrentLine();

  const renderBlocks = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`${styles.marmoreioBlock} ${i < level ? styles.active : styles.inactive}`}
      />
    ));
  };
  return (
    <>
      <Link className={styles.cardContainer} to={link} draggable="false">
        <div
          className={
            currentLine === "Boutique"
              ? styles.boutiqueBackground
              : currentLine === "Novilho Jovem"
                ? styles.novilhoBackground
                : currentLine === "Campo Nobre"
                  ? styles.nobreBackground
                  : currentLine === "Pampeira"
                    ? styles.pampeiraBackground
                    : styles.diaADiaBackground
          }
        >
          <div className={styles.gradientFilter}></div>
          <div className={styles.cardImgContainer}>
            <div className={styles.backgroundFilter}></div>
            <img
              src={image}
              alt={` Imagem da carne ${name.toLocaleLowerCase()}`}
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <span>{tagline}</span>
          <strong>{name}</strong>
          <p className={styles.shortDescription}>{shortDescription}</p>
          <div className={styles.marmoreio}>
            MARMOREIO
            <div className={styles.blocksWrapper}>{renderBlocks(marbling)}</div>
          </div>
          <div className={styles.marmoreio}>
            MACIEZ
            <div className={styles.blocksWrapper}>{renderBlocks(softness)}</div>
          </div>
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
