// import { motion } from "framer-motion";
import styles from "./styles.module.css";

import { GradientText } from "../../components/GradientText";

import { StatisticNumber } from "../../components/StatisticNumber";
export function SectionSobre() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.contentContainer}>
          <div className={styles.imagesContainer}>
            <div className={styles.aboutImageBg}> </div>

            <div className={styles.aboutImage}></div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.aboutSubTitle}>conheça a dom hygino</span>
              <div className={styles.aboutTitleMiniContainer}>
                <GradientText as="h2" variant="mid" className={styles.aboutTitle}>
                  Tradição, Qualidade e{" "}
                </GradientText>
                <h2 className={`${styles.aboutTitle} ${styles.highlight}`}>
                  Excelência
                </h2>
              </div>
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
              <StatisticNumber number="6+" text="Anos no Mercado" />
              <StatisticNumber number="7+" text="Lojas no Brasil" />
              <StatisticNumber number="40k+" text="Clientes Satisfeitos" />
              <StatisticNumber number="100%" text="Qualidade Premium" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
