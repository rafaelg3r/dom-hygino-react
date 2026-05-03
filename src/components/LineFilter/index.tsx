import styles from "./styles.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useCurrentLine } from "../../utils/currentLine";
import boutiqueLogo from "../../assets/menu/logos/Boutique-white.jpg";

export function LineFilter() {
  const currentLine = useCurrentLine();
  const selectedLine = currentLine?.toLocaleLowerCase();

  return (
    <div className={styles.lineFilter}>
      <h2>Escolha uma linha</h2>
      <div className={styles.selectorOptions}>
        <Link
          to="?linha=Boutique"
          className={clsx(
            styles.selectorLink,
            selectedLine === "boutique" && styles.menuSelected,
          )}
        >
          <img src={boutiqueLogo} width={200} alt="" />
          <div className={styles.selectorInfo}>
            <span>Primor <br />em <br />cada <br /> corte</span>
          </div>
        </Link>
        <Link
          to="?linha=Novilho Jovem"
          className={clsx(
            styles.selectorLink,
            selectedLine === "novilho jovem" && styles.menuSelected,
          )}
        >
          <img src={boutiqueLogo} width={200} alt="" />
        </Link>
        <Link
          to="?linha=Churrasco"
          className={clsx(
            styles.selectorLink,
            selectedLine === "churrasco" && styles.menuSelected,
          )}
        >
          <img src={boutiqueLogo} width={200} alt="" />
        </Link>
        <Link
          to="?linha=Pampeira"
          className={clsx(
            styles.selectorLink,
            selectedLine === "pampeira" && styles.menuSelected,
          )}
        >
          <img src={boutiqueLogo} width={200} alt="" />
        </Link>
        {/* <Link to="?linha=Produtos">Produtos</Link> */}
      </div>
    </div>
  );
}
