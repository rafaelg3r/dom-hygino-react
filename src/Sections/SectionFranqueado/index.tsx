import styles from "./styles.module.css";
import { GradientText } from "../../components/GradientText";
import { Button } from "../../components/Button";
import "../../global.css";
export function SectionFranqueado() {
  return (
    <>
      <div className={styles.gridBg}>
        <section className={styles.franqueados}>
          <div className={styles.franqueadosContainer}>
            <GradientText as="h2" variant="mid" className={styles.title}>
              Quer ser um <span>franqueado</span>
              <span className={styles.questionMark}>?</span>
            </GradientText>
            <div className={styles.text}>
              <p>
                Leve a tradição da Dom Hygino para a sua cidade! Há anos nos
                destacamos pela qualidade, confiança e excelência. Agora, você
                pode fazer parte dessa história de sucesso!
              </p>
            </div>
            <a
              href="https://wa.me/555599603419?text=Entre%20em%20contato%20com%20as%20lojas%20Dom%20Hygino!"
              className={styles.btnContainer}
            >
              <Button size="big" className="flexBtn">
                marcar uma reunião
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
