import styles from "./styles.module.css";
// import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { products, type Product } from "../../data/products";

import TextNovilho from "../../assets/menu/linhas-banner/textNovilho.png";
import TextBoutique from "../../assets/menu/linhas-banner/textBoutique.png";
import TextPampeira from "../../assets/menu/linhas-banner/textPampeira.png";
import TextCampoNobre from "../../assets/menu/linhas-banner/textCampoNobre.png";
import TextDiaADia from "../../assets/menu/linhas-banner/textDiaADia.png";

export function SectionBanner() {
  const [searchParams] = useSearchParams();

  // Linha atual baseada na URL ou usa default
  const currentLine = searchParams.get("linha") || "Boutique";

  // Mapeamento de linhas para imagens (Record<Key, Value>)
  const bannersText: Record<string, string> = {
    boutique: TextBoutique,
    "novilho jovem": TextNovilho,
    pampeira: TextPampeira,
    "campo nobre": TextCampoNobre,
    "dia a dia": TextDiaADia,
  };
  type BannerTextKeys = keyof typeof bannersText;
  const bannerTextLine =
    bannersText[currentLine.toLocaleLowerCase() as BannerTextKeys] ||
    TextBoutique;

  const bannersImage: Record<string, string> = {
    boutique: "bannerBtq",
    "novilho jovem": "bannerNov",
    "campo nobre": "bannerNob",
    pampeira: "bannerPmp",
    "dia a dia": "bannerDia",
  };
  type BannerImgKeys = keyof typeof bannersImage;
  const bannerImgLine =
    bannersImage[currentLine.toLocaleLowerCase() as BannerImgKeys] ||
    "bannerBtq";
  return (
    <div className={styles.bannerContainer}>
      <div className={`${styles.menuBanner} ${styles[`${bannerImgLine}`]}`}>
        <picture className={styles.menuTitle}>
          <source media="(min-width: 1081px)" srcSet={bannerTextLine} />
          <img
            id="banner-title"
            src={bannerTextLine}
            alt={`Banner da linha ${currentLine}`}
          />
        </picture>
        <div className={styles.menuBannerGradient}></div>
      </div>
      <div className={styles.bannerLine}></div>
    </div>
  );
}
