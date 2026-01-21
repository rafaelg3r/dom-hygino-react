import styles from "./styles.module.css";

type StatisticNumberProps = {
  number: string;
  text: string;
};
export function StatisticNumber({ number, text }: StatisticNumberProps) {
  return (
    <div className={styles.contentContainer}>
      <span className={styles.statisticNumber}>{number}</span>
      <strong className={styles.statisticText}>{text}</strong>
    </div>
  );
}
