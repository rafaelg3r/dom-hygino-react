import styles from "./styles.module.css";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "../Button";

// Imagens
import LogoSlim from "../../assets/logos/logoSlim.png";
import downArrow from "../../assets/icons/downArrow.png";
import instagramIcon from "../../assets/icons/instagram.svg";
import mobileOptionsIcon from "../../assets/icons/options.svg";
import closeIcon from "../../assets/icons/close.svg";

export function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  return (
    <div className={styles.navbarContainer}>
      <header>
        <Link smooth to="/#home" className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={LogoSlim}
            alt="Logo pequena da loja de carnes Dom Hygino"
          />
        </Link>
        <div className={styles.mobileOptions}>
          <img
            src={isMenuMobileOpen ? closeIcon : mobileOptionsIcon}
            alt="Opções"
            onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
          />
          {isMenuMobileOpen && (
            <div
              className={styles.mobileOptionsList}
              onClick={() => setIsMenuMobileOpen(false)}
            >
              <Link smooth to="/#home" className={styles.mobileLink}>
                Home
              </Link>
              <Link smooth to="/menu" className={styles.mobileLink}>
                Linhas
              </Link>
              <Link smooth to="/#lojas" className={styles.mobileLink}>
                Lojas
              </Link>
              <Link
                smooth
                to="https://wa.me/555599603419"
                target="_blank"
                className={styles.mobileLink}
              >
                Seja um Franqueado
              </Link>
              <Link
                smooth
                to="https://linktr.ee/domhygino"
                target="_blank"
                className={styles.mobileLink}
              >
                Instagram
              </Link>
              <Link
                smooth
                to="https://wa.me/555599603419"
                target="_blank"
                className={styles.mobileLink}
              >
                Contato
              </Link>
            </div>
          )}
        </div>

        <nav className={styles.navbar}>
          <div className={styles.leftNav}>
            <Link smooth className={styles.lineLink} to="/#home">
              home
            </Link>

            <div
              className={`${styles.lineLink} ${styles.navProdutosContainer}`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <span className={styles.navProducts}>produtos</span>
              <img src={downArrow} className={styles.arrow} alt="Seta" />

              {isProductsOpen && (
                <div className={styles.produtosListWrapper}>
                  <div className={styles.blankSpace}></div>
                  <div className={styles.produtosList}>
                    <Link
                      to="/menu?linha=Boutique"
                      className={styles.produtosListItem}
                    >
                      Linha Boutique
                    </Link>
                    <Link
                      to="/menu?linha=Novilho Jovem"
                      className={styles.produtosListItem}
                    >
                      Linha Novilho Jovem
                    </Link>
                    <Link
                      to="/menu?linha=Churrasco"
                      className={styles.produtosListItem}
                    >
                      Linha Churrasco
                    </Link>
                    <Link
                      to="/menu?linha=Pampeira"
                      className={styles.produtosListItem}
                    >
                      Linha Pampeira
                    </Link>
                    {/* <Link
                      to="/menu?linha=Produtos"
                      className={styles.produtosListItem}
                    >
                      Produtos
                    </Link> */}
                  </div>
                </div>
              )}
            </div>

            <Link smooth className={styles.lineLink} to="/#lojas">
              lojas
            </Link>
          </div>

          <div className={styles.rightNav}>
            <a
              className={styles.lineLink}
              href="https://wa.me/555599603419"
              target="_blank"
              rel="noreferrer"
            >
              seja um franqueado
            </a>
            <a
              href="https://linktr.ee/domhygino"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.instagramIcon}
                src={instagramIcon}
                width="36px"
                alt="Icone do instagram"
              />
            </a>
            <a
              href="https://wa.me/555599603419"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">Contato</Button>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
