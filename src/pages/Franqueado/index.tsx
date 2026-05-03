import { MoveLeft } from "lucide-react";
import { Button } from "../../components/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Franqueado = () => {
  return (
    <div className={styles.franqueados}>
      <p>
        No momento, o programa de expansão de franquias não está disponível.
      </p>
      <Link to="/home">
        <Button size="small" border className={styles.btnFranqueado}>
          <MoveLeft />
          Voltar
        </Button>
      </Link>
    </div>
  );
};

export default Franqueado;
