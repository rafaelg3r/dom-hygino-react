import styles from "./styles.module.css";
import { GradientText } from "../../components/GradientText";
import { Button } from "../../components/Button";
import "../../global.css";
import { motion } from "framer-motion";
export function SectionFranqueado() {
  return (
    <>
        <section className={styles.franqueados}>
          <div className={styles.franqueadosContainer}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <GradientText as="h2" variant="mid" className={styles.title}>
                Quer ser um <span>franqueado</span>
                <span className={styles.questionMark}>?</span>
              </GradientText>
            </motion.div>
            <div className={styles.text}>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                Leve a tradição da Dom Hygino para a sua cidade! Há anos nos
                destacamos pela qualidade, confiança e excelência. Agora, você
                pode fazer parte dessa história de sucesso!
              </motion.p>
            </div>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.4 }}
              href="/franqueado"
              className={styles.btnContainer}
            >
              <Button size="big" className="flexBtn">
                marcar uma reunião
              </Button>
            </motion.a>
          </div>
        </section>
    </>
  );
}
