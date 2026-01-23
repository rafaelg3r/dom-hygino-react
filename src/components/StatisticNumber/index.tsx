import styles from "./styles.module.css";
import { motion } from "framer-motion";

type StatisticNumberProps = {
  number: string;
  text: string;
  animationDelay: number;
};
export function StatisticNumber({ number, text, animationDelay }: StatisticNumberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{duration: 0.5, delay: animationDelay}}
      className={styles.contentContainer}
    >
      <span className={styles.statisticNumber}>{number}</span>
      <strong className={styles.statisticText}>{text}</strong>
    </motion.div>
  );
}
