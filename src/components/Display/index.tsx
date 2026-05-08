import styles from "./styles.module.css";
// import { GradientText } from "../GradientText";
import { useCurrentSteak } from "../../utils/currentLine";
import { products } from "../../utils/products";
import { motion } from "framer-motion";
import { Flame, Wine } from "lucide-react";
import { Button } from "../Button";

// TODO: animações nos acompanhamentos em cascata de cima pra baixo,
export function Display() {
  const currentSteakName = useCurrentSteak();

  const currentProduct = products.find(
    (p) => p.name.toLowerCase() === currentSteakName?.toLowerCase(),
  );
  const renderBlocks = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`${styles.marmoreioBlock} ${
          i < level ? styles.active : styles.inactive
        }`}
      />
    ));
  };

  if (!currentProduct) {
    return (
      <div className={`${styles.menuDisplay} ${styles.displayNoContent}`}>
        <div className={styles.displayContent}>
          <p>Selecione uma carne</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.menuDisplay} id="Display">
        <div className={styles.displayContent}>
          <div className={styles.displayImageContainer}>
            <motion.img
              key={`title-${currentProduct.name}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              src={currentProduct.smallerImage ? currentProduct.smallerImage : currentProduct.image}
              alt={currentProduct.name}
            />
          </div>
          <motion.div className={styles.displayTextContainer}>
            <span className={styles.tagline}>{currentProduct.tagline}</span>
            <h2>{currentProduct.name}</h2>
            <div className={styles.levelsContainer}>
              <div className={styles.marmoreio}>
                <span>marmorização</span>
                <div className={styles.blocksContainer}>
                  {renderBlocks(currentProduct.marbling)}
                </div>
              </div>
              <div className={styles.marmoreio}>
                <span>maciez</span>
                <div className={styles.blocksContainer}>
                  {renderBlocks(currentProduct.softness)}
                </div>
              </div>
            </div>
            <p className={styles.description}>{currentProduct.description}</p>
            <div className={styles.displayDivider}></div>
            <div className={styles.displaySuggestions}>
              <div className={styles.preparoSugerido}>
                <div className={styles.prepTitle}>
                  <Flame size={16} color={` var(--pink-red-80) `} />
                  <span>Preparo Sugerido</span>
                </div>
                <p className={styles.suggestedPreparation}>
                  {currentProduct.suggestedPreparation}
                </p>
              </div>
              <div className={styles.preparoSugerido}>
                <div className={styles.prepTitle}>
                  <Wine size={16} color={` var(--pink-red-80) `} />
                  <span>Harmonização</span>
                </div>
                <p className={styles.suggestedPreparation}>
                  {currentProduct.harmonization}
                </p>
              </div>
            </div>
            <Button size="medium" className={styles.btnEntrarContato}>
              Ver lojas disponíveis
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
