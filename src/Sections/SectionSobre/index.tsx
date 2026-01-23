import { motion } from "framer-motion";
import styles from "./styles.module.css";

import { GradientText } from "../../components/GradientText";

import { StatisticNumber } from "../../components/StatisticNumber";
export function SectionSobre() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.contentContainer}>
          <div className={styles.imagesContainer}>
            <motion.div
              initial={{ opacity: 0, x: 10, y: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: 1.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className={styles.aboutImageBg}
            >
              {" "}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 1, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className={styles.aboutImage}
            ></motion.div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className={styles.aboutSubTitle}
              >
                conheça a dom hygino
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className={styles.aboutTitleMiniContainer}
              >
                <GradientText
                  as="h2"
                  variant="mid"
                  className={styles.aboutTitle}
                >
                  Tradição, Qualidade e{" "}
                </GradientText>
                <h2 className={`${styles.aboutTitle} ${styles.highlight}`}>
                  Excelência
                </h2>
              </motion.div>
            </div>
            <div className={styles.text}>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                Nascida no coração de Santa Rosa, Rio Grande do Sul, a Dom
                Hygino se destaca pela qualidade, confiança e excelência no
                mercado de carnes nobres. Unimos a herança da tradição gaúcha ao
                rigoroso cuidado na seleção de cortes premium, garantindo um
                compromisso inabalável com o sabor e a experiência do cliente.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                Nossa missão é levar a tradição gaúcha e os melhores cortes para
                cada mesa brasileira, com o padrão premium que nossos clientes
                merecem.
              </motion.p>
            </div>
            <div className={styles.statisticsContainer}>
              <StatisticNumber
                number="6+"
                text="Anos no Mercado"
                animationDelay={1.3}
              />
              <StatisticNumber
                number="7+"
                text="Lojas no Brasil"
                animationDelay={1.5}
              />
              <StatisticNumber
                number="40k+"
                text="Clientes Satisfeitos"
                animationDelay={1.7}
              />
              <StatisticNumber
                number="100%"
                text="Qualidade Premium"
                animationDelay={1.8}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
