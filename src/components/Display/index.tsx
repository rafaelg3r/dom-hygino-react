import styles from "./styles.module.css";
import { GradientText } from "../GradientText";
import { useCurrentSteak } from "../../utils/currentLine";
import { products } from "../../utils/products";
import { motion } from "framer-motion";

// TODO: animações nos acompanhamentos em cascata de cima pra baixo,
export function Display() {
  const currentSteakName = useCurrentSteak();

  const currentProduct = products.find(
    (p) => p.name.toLowerCase() === currentSteakName?.toLowerCase(),
  );

  if (!currentProduct) {
    return (
      <div className={`${styles.menuDisplay} ${styles.displayNoContent}`}>
        <div className={styles.displaySteakContent}>
          <p>Selecione uma carne</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.menuDisplay}>
        <div className={styles.displaySteakContent}>
          <motion.img
            key={`title-${currentProduct.name}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            src={currentProduct.image}
            alt={currentProduct.name}
          />
          <motion.div className={styles.displayContent}>
            <span>{currentProduct.tagline}</span>
            <h2>{currentProduct.name}</h2>
            <p className={styles.marmoreio}>MARMOREIO
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
            <div className={styles.marmoreioBlock}></div>
             </p>
             <p>{currentProduct.description}</p>
             <br />
             <div className={styles.preparoSugerido}></div>
             <div className={styles.harmonizacao}></div>
          </motion.div>
        </div>
        <div className={styles.displayInfoContainer}></div>
      </div>
    </>
  );
}
