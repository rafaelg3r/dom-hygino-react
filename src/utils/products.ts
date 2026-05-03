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
  tagline: string;
  image: string;
};

export const products: Product[] = [
  // LINHA BOUTIQUE
  {
    name: "Denver",
    line: "Boutique",
    description: "Corte macio e suculento, conhecido por seu sabor intenso e textura única. Localizado na parte dianteira do boi, o Denver é valorizado por sua marmorização, que proporciona uma experiência gastronômica rica e saborosa. Ideal para grelhar ou assar, o Denver é uma escolha popular entre os amantes de carne que buscam uma opção premium e cheia de sabor.",
    shortDescription: "teste short denver",
    tagline: "Sabor intenso",
    image: denverBtqImg,
  },

  // LINHA NOVILHO JOVEM
  {
    name: "Picanha",
    line: "Novilho Jovem",
    description: "teste picanha",
    shortDescription: "teste short picanha",
    tagline: "Picanha",
    image: picanhaNovImg,
  },

  // LINHA PAMPEIRA

  {
    name: "Maminha",
    line: "Pampeira",
    description: "teste Maminha",
    shortDescription: "teste short Maminha",
    tagline: "Denver",
    image: maminhaPmpImg,
  },
  // LINHA NOBRE

  {
    name: "Picanha",
    line: "Campo Nobre",
    description: "teste picanha",
    shortDescription: "teste short picanha",
    tagline: "Denver",
    image: anchoGrillNobImg,
  },
  // LINHA DIA A DIA
];
