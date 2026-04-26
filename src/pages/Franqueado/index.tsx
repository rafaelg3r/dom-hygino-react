import { MoveLeft } from "lucide-react";
import { Button } from "../../components/Button";
import styles from "./styles.module.css";
const Franqueado = () => {
  return (
    <div className={styles.franqueados}>
      <p>
        No momento, o programa de expansão de franquias não está disponível.
      </p>
      <Button size="small" border className={styles.btnFranqueado}>
        <MoveLeft />
        Voltar
      </Button>
    </div>
  );
};

export default Franqueado;
