import styles from "./styles.module.css";
import "../../global.css";

import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import HomeImg from "../../assets/home/home-bg.jpg";

import { Button } from "../../components/Button";
import { GradientText } from "../../components/GradientText";
import { useEffect, useState } from "react";

export function SectionMain() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisitedHome = sessionStorage.getItem("visited_home");

    if (hasVisitedHome) {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem("visited_home", "true");
    }
  }, []);

  const delayReduction = isFirstVisit ? 0 : 1.1;
  return (
    <div id="home">
      <main className={styles.hero}>
        <div
          className={`${styles.gradientBg} ${styles.gradientBottomTop}`}
        ></div>
        <div
          className={`${styles.gradientBg} ${styles.gradientLeftRight}`}
        ></div>

        <img
          draggable="false"
          className={styles.mainBg}
          src={HomeImg}
          alt="Background"
        />
        <div className={styles.heroTextContent}>
          <motion.strong
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.3 - delayReduction }}
          >
            Carnes e Especiarias
          </motion.strong>
          <div className={styles.heroText}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.6 - delayReduction }}
            >
              <GradientText
                as="h1"
                variant="right"
                className={styles.heroTitle}
              >
                Dom Hygino
              </GradientText>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.8 - delayReduction }}
            >
              Da nossa seleção especial de carnes para o seu prato. Cortes
              nobres, frescos e com sabor incomparável para transformar suas
              refeições!
            </motion.p>
            <div className={styles.heroBtns}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 3.2 - delayReduction }}
              >
                <Link to="/menu">
                  <Button size="big" className="flexBtn">
                    Ver Produtos
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 3.4 - delayReduction }}
              >
                <Link smooth to="/#lojas">
                  <Button size="big" border className="flexBtn">
                    Nossas Lojas
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
