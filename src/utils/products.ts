//Boutique
import denverBtqImg from "../assets/menu/carnes/BOUTIQUE/denver-btq.png";
// Novilho
import picanhaNovImg from "../assets/menu/carnes/NOVILHO/picanha-nov.png";
//Pampeira
import maminhaPmpImg from "../assets/menu/carnes/PAMPEIRA/maminha-pmp.png";

// Nobre
import anchoGrillNobImg from "../assets/menu/carnes/NOBRE/ancho-grill-nob.png";
// Dia a dia
export type Product = {
  name: string;
  line: "Boutique" | "Novilho Jovem" | "Campo Nobre" | "Pampeira" | "Dia a dia";
  description: string;
  shortDescription: string;
  suggestedPreparation: string;
  harmonization: string;
  tagline: string;
  image: string;
};

export const products: Product[] = [
  // LINHA BOUTIQUE
  {
    name: "Denver",
    line: "Boutique",
    description:
      "Corte macio e suculento, conhecido por seu sabor intenso e textura única. É uma escolha popular entre os amantes de carne que buscam uma opção premium e cheia de sabor.",
    shortDescription: "teste short denver",
    suggestedPreparation:
      "Corte em bifes grossos (2 a 3 dedos) e sele em fogo forte para caramelizar o marmoreio. Deixe a carne descansar por 5 minutos antes de fatiar contra a fibra, garantindo máxima suculência.",
    harmonization: "Malbec encorpado, Cabernet Sauvignon ou um Tannat uruguaio.",
    tagline: "Sabor intenso",
    image: denverBtqImg,
  },

  // LINHA NOVILHO JOVEM
  {
    name: "Picanha",
    line: "Novilho Jovem",
    description: "teste picanha",
    shortDescription: "teste short picanha",
    suggestedPreparation: "a",
    harmonization: "a",
    tagline: "Picanha",
    image: picanhaNovImg,
  },

  // LINHA PAMPEIRA

  {
    name: "Maminha",
    line: "Pampeira",
    description: "teste Maminha",
    shortDescription: "teste short Maminha",
    suggestedPreparation: "a",
    harmonization: "a",
    tagline: "Denver",
    image: maminhaPmpImg,
  },
  // LINHA NOBRE

  {
    name: "Picanha",
    line: "Campo Nobre",
    description: "teste picanha",
    shortDescription: "teste short picanha",
    suggestedPreparation: "a",
    harmonization: "a",
    tagline: "Denver",
    image: anchoGrillNobImg,
  },
  // LINHA DIA A DIA
];
