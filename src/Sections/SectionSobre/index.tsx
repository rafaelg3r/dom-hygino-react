// import { motion } from "framer-motion";
import styles from "./styles.module.css";

import { GradientText } from "../../components/GradientText";

// import LogoDomHygino from "../../assets/logos/logoSlim.png";
import LojaDomHygino from "../../assets/home/sobre/loja-dom-santa-rosa.jpg";
export function SectionSobre() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.contentContainer}>
          <div className={styles.imagesContainer}>
            <div className={styles.aboutImageBg}> </div>
            <img
              src={LojaDomHygino}
              alt="logo da dom hygino carnes e especiarias"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.aboutSubTitle}>conheça a dom hygino</span>
              <GradientText as="h2" variant="mid" className={styles.aboutTitle}>
                Tradição, Qualidade e{" "}
              </GradientText>
              <h2 className={`${styles.aboutTitle} ${styles.highlight}`}>
                Excelência
              </h2>
            </div>
            <div className={styles.text}>
              <p>
                Nascida no coração de Santa Rosa, Rio Grande do Sul, a Dom
                Hygino se destaca pela qualidade, confiança e excelência no
                mercado de carnes nobres. Unimos a herança da tradição gaúcha ao
                rigoroso cuidado na seleção de cortes premium, garantindo um
                compromisso inabalável com o sabor e a experiência do cliente.
              </p>
              <p>
                Nossa missão é levar a tradição gaúcha e os melhores cortes para
                cada mesa brasileira, com o padrão premium que nossos clientes
                merecem.
              </p>
            </div>
            <div className={styles.statisticsContainer}>
              <div>
                <span></span>
                <strong>Anos no Mercado</strong>
              </div>
              <div>
                <span></span>
                <strong>Lojas no Brasil</strong>
              </div>
              <div>
                <span></span>
                <strong>Produtos Diferentes</strong>
              </div>
              <div>
                <span></span>
                <strong> </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
