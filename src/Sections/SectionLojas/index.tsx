import { GradientText } from "../../components/GradientText";
import styles from "./styles.module.css";

import mapImg from "../../assets/home/lojas/lojas-mapa.png";
import instagramIcon from "../../assets/icons/instagram.svg";
import outArrow from "../../assets/icons/outArrow.svg";
import { motion } from "framer-motion";
export function SectionLojas() {
  return (
    <>
      <section id="lojas" className={styles.lojas}>
        <div className={styles.gradientBottom}></div>
        <div className={styles.lojasTitleContainer}>
          <GradientText as="h2" variant="mid" className={styles.lojasTitle}>
            Nossas Lojas
          </GradientText>
        </div>
        <div className={styles.lojasContentContainer}>
          <div className={styles.lojasMap}>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              src={mapImg}
              className={styles.mapaLojasCidades}
              alt=""
            />
          </div>
          <div className={styles.lojasSocials}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <GradientText as="h3" variant="mid">
                ACOMPANHE AS OFERTAS DA SEMANA
              </GradientText>
            </motion.div>
            <div className={styles.lojasLista}>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                target="_blank"
                href="https://www.instagram.com/domhygino"
              >
                <div className={styles.domItemLista}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="logo do instagram" />
                    <span>Dom Hygino Santa Rosa</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                target="_blank"
                href="https://www.instagram.com/domhyginocaxiasdosul"
              >
                <div
                  className={`${styles.domItemLista} ${styles.domCaxiasDoSul} `}
                >
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Caxias do Sul</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                target="_blank"
                href="http://instagram.com/dom_hygino_capao"
              >
                <div className={styles.domItemLista}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Capão Da Canoa</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.5 }}
                target="_blank"
                href="https://www.instagram.com/domhygino_horizontina/"
              >
                <div className={styles.domItemLista}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span> Dom Hygino Horizontina </span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
                target="_blank"
                href="https://www.instagram.com/domhyginoijui/"
              >
                <div className={`${styles.domItemLista} ${styles.dom5}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Ijuí</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.5 }}
                target="_blank"
                href="https://www.instagram.com/dom_hygino_jaragua/"
              >
                <div className={`${styles.domItemLista} ${styles.dom6}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Jaraguá do Sul</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.5 }}
                target="_blank"
                href="https://www.instagram.com/domhygino_poa/"
              >
                <div className={`${styles.domItemLista} ${styles.dom7}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Porto Alegre</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.5 }}
                target="_blank"
                href="https://www.instagram.com/domhyginotorres/"
              >
                <div className={`${styles.domItemLista} ${styles.dom8}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Torres</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
