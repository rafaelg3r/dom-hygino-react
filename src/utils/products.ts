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
    description: "teste denver",
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
    line: "Novilho Jovem",
    description: "teste picanha",
    shortDescription: "teste short picanha",
    tagline: "Denver",
    image: anchoGrillNobImg,
  },
  // LINHA DIA A DIA
];
