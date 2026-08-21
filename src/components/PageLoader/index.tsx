import { useEffect, useState } from "react"; // Adicionado useRef
import { useLocation } from "react-router-dom"; // Usando useLocation conforme appRouter.tsx[cite: 1]
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import TouroLogo from "../../assets/logos/touro-logo.jpeg";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6, // deslizamento
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.img
            src={TouroLogo}
            alt="Logo"
            className={styles.loaderLogo}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          />
          <motion.p
            className={styles.loader}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          ></motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
