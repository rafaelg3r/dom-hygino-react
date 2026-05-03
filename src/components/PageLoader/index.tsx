import { useEffect, useState, useRef } from "react"; // Adicionado useRef
import { useLocation } from "react-router-dom"; // Usando useLocation conforme appRouter.tsx[cite: 1]
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import LogoSlim from "../../assets/logos/logoSlim.png";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const visitedPages = useRef(new Set());

  useEffect(() => {
    setIsLoading(true);

    const hasVisitedBefore = visitedPages.current.has(location.pathname);
    const delay = hasVisitedBefore ? 1100 : 2200;
    const timer = setTimeout(() => {
      setIsLoading(false);
      visitedPages.current.add(location.pathname);
    }, delay);

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
            src={LogoSlim}
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
