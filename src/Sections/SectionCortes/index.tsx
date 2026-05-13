import styles from "./styles.module.css";
import { GradientText } from "../../components/GradientText";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "../../components/Button";
import "../../global.css";
import { motion } from "framer-motion";

export function SectionCortes() {
  return (
    <>
      <section id="cortes" className={styles.cortesMenu}>
        <GradientText as="h2" variant="mid" className={styles.cortesMenuTitle}>
          Cortes
        </GradientText>

        <div className={styles.menuSelectorsContainer}>
          <div className={styles.linhaBoutique}>
            <div className={styles.menuText}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <GradientText as="h2" variant="left">
                  linha boutique
                </GradientText>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                A Linha Boutique representa o mais alto padrão em cortes
                premium. Indicada para quem busca uma experiência gastronômica
                fora da curva!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link className={styles.btnContainer} to="/menu?linha=Boutique">
                  <Button size="big" className="flexBtn">
                    {" "}
                    Acessar Linha{" "}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className={styles.linhaNovilho}>
            <div className={styles.menuText}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <GradientText as="h2" variant="right">
                  linha novilho jovem
                </GradientText>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                A Linha Novilho Jovem traz cortes premium selecionados de
                novilhos de até 36 meses. Escolha ideal tanto para o churrasco
                quanto para o dia a dia! É uma linha versátil que une tradição e
                qualidade para todos os momentos.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link
                  className={styles.btnContainer}
                  to="/menu?linha=Novilho Jovem"
                >
                  <Button size="big" className="flexBtn">
                    Acessar Linha
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className={styles.linhaCampoNobre}>
            <div className={styles.menuText}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <GradientText as="h2" variant="left">
                  linha Campo Nobre
                </GradientText>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                A Linha Campo Nobre oferece cortes tradicionais que carregam a
                essência da culinária gaúcha. Reconhecida pelo preço competitivo
                e pelo verdadeiro sabor do Sul, é a linha que valoriza a
                tradição, a rusticidade e o gosto autêntico da carne bem feita.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link
                  className={styles.btnContainer}
                  to="/menu?linha=Campo Nobre"
                >
                  <Button size="big" className="flexBtn">
                    {" "}
                    Acessar Linha{" "}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className={styles.linhaPampeira}>
            <div className={styles.menuText}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <GradientText as="h2" variant="right">
                  linha pampeira
                </GradientText>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                A Linha Pampeira é a escolha perfeita para o dia a dia, unindo
                sabor e economia sem abrir mão da qualidade. Oferece cortes
                economy, ideais para refeições práticas e acessíveis, mantendo o
                verdadeiro gosto da carne bem preparada.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link className={styles.btnContainer} to="/menu?linha=Pampeira">
                  <Button size="big" className="flexBtn">
                    {" "}
                    Acessar Linha{" "}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
