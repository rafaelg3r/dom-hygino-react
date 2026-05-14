import styles from "./styles.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useCurrentLine } from "../../utils/currentLine";

import boutiqueLogo from "../../assets/menu/logos/Boutique-white.jpg";
import novilhoLogo from "../../assets/menu/logos/Novilho-Brown.jpg";
import nobreLogo from "../../assets/menu/logos/Nobre-azul.jpg";
import pampeiraLogo from "../../assets/menu/logos/Pampeira-green.jpg";
import diaADiaLogo from "../../assets/menu/logos/DiaADia.jpg";
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
          <img src={boutiqueLogo} alt="" />
        </Link>
        <Link
          to="?linha=Novilho Jovem"
          className={clsx(
            styles.selectorLink,
            selectedLine === "novilho jovem" && styles.menuSelected,
          )}
        >
          <img src={novilhoLogo} alt="" />
        </Link>
        <Link
          to="?linha=Campo Nobre"
          className={clsx(
            styles.selectorLink,
            selectedLine === "campo nobre" && styles.menuSelected,
          )}
        >
          <img src={nobreLogo} alt="" />
        </Link>
        <Link
          to="?linha=Pampeira"
          className={clsx(
            styles.selectorLink,
            selectedLine === "pampeira" && styles.menuSelected,
          )}
        >
          <img src={pampeiraLogo} alt="" />
        </Link>
        <Link
          to="?linha=Dia a dia"
          className={clsx(
            styles.selectorLink,
            selectedLine === "dia a dia " && styles.menuSelected,
          )}
        >
          <img src={diaADiaLogo} alt="" />
        </Link>
        {/* <Link to="?linha=Produtos">Produtos</Link> */}
      </div>
    </div>
  );
}
