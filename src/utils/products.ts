//Boutique
import denverBtqImg from "../assets/menu/carnes/BOUTIQUE/denver-btq.png";
import tomahawkBtqImg from "../assets/menu/carnes/BOUTIQUE/tomahawk-btq-smaller.png";
import matambreBtqImg from "../assets/menu/carnes/BOUTIQUE/matambre-btq.png";
import shankBtqImg from "../assets/menu/carnes/BOUTIQUE/shank-btq.png";
import steakShoulderBtqImg from "../assets/menu/carnes/BOUTIQUE/steak-shoulder-btq.png";
import maminhaBtqImg from "../assets/menu/carnes/BOUTIQUE/maminha-btq.png";
import vazioBtqImg from "../assets/menu/carnes/BOUTIQUE/vazio-btq.png";
import entrecotBtqImg from "../assets/menu/carnes/BOUTIQUE/entrecot-btq.png";
import chorizoGrillBtqImg from "../assets/menu/carnes/BOUTIQUE/chorizo-grill-btq.png";
import costelaGrillBtqImg from "../assets/menu/carnes/BOUTIQUE/costela-grill-btq.png";
import shortRibBtqImg from "../assets/menu/carnes/BOUTIQUE/short-rib-btq.png";
import houseRibBtqImg from "../assets/menu/carnes/BOUTIQUE/house-hib-btq.png";
import skirtSteakBtqImg from "../assets/menu/carnes/BOUTIQUE/skirt-steak-btq.png";
import petitFileBtqImg from "../assets/menu/carnes/BOUTIQUE/petit-filet-btq.png";
import brisketBtqImg from "../assets/menu/carnes/BOUTIQUE/brisket-btq.png";
import cowboySteakBtqImg from "../assets/menu/carnes/BOUTIQUE/cowboy-steak-btq.png";
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
    harmonization:
      "Malbec encorpado, Cabernet Sauvignon ou um Tannat uruguaio.",
    tagline: "Sabor intenso",
    image: denverBtqImg,
  },
  {
    name: "Tomahawk",
    line: "Boutique",
    description:
      "Corte nobre retirado do ancho com osso longo preservado, conhecido pelo alto marmoreio, maciez e apresentação marcante. Une sabor intenso e extrema suculência em um corte premium muito valorizado nas parrillas.",
    shortDescription: "Imponente, macio e muito suculento.",
    suggestedPreparation:
      "Prepare em fogo médio-alto, selando ambos os lados para formar crosta caramelizada. Finalize em calor indireto até atingir o ponto desejado e deixe descansar antes de servir.",
    harmonization:
      "Cabernet Sauvignon estruturado, Malbec reserva ou cervejas strong ale.",
    tagline: "Presença e intensidade",
    image: tomahawkBtqImg,
  },
  {
    name: "Matambre",
    line: "Boutique",
    description:
      "Corte fino e fibroso retirado entre o couro e a costela bovina, muito tradicional na culinária argentina e uruguaia. Possui sabor marcante e excelente absorção de temperos e marinadas.",
    shortDescription: "Tradicional, fino e cheio de sabor.",
    suggestedPreparation:
      "Ideal para preparo na grelha em fogo médio, podendo ser recheado ou servido crocante. Marinadas ajudam a intensificar sabor e maciez.",
    harmonization: "Tempranillo, Pinot Noir ou cervejas amber ale.",
    tagline: "Autenticidade da parrilla",
    image: matambreBtqImg,
  },
  {
    name: "Shank",
    line: "Boutique",
    description:
      "Corte retirado do dianteiro bovino, rico em colágeno e fibras musculares. Quando preparado lentamente, entrega textura extremamente macia e sabor profundo.",
    shortDescription: "Sabor profundo e textura macia.",
    suggestedPreparation:
      "Perfeito para cocção lenta, ensopados ou braseados longos. O cozimento prolongado transforma o colágeno em textura gelatinosa e suculenta.",
    harmonization: "Syrah, Merlot encorpado ou cervejas porter.",
    tagline: "Intenso em cozimento lento",
    image: shankBtqImg,
  },
  {
    name: "Steak Shoulder",
    line: "Boutique",
    description:
      "Corte retirado da paleta bovina, conhecido pelo equilíbrio entre sabor intenso e boa maciez. Possui fibras marcantes e ótima suculência quando preparado corretamente.",
    shortDescription: "Maciez equilibrada e sabor marcante.",
    suggestedPreparation:
      "Grelhe em fogo alto até formar crosta dourada, preservando o interior suculento. Fatie contra as fibras para melhor textura.",
    harmonization: "Cabernet Franc, Carménère ou IPA moderada.",
    tagline: "Força e suculência",
    image: steakShoulderBtqImg,
  },
  {
    name: "Maminha",
    line: "Boutique",
    description:
      "Corte macio e suculento localizado na ponta da alcatra, muito apreciado pelo sabor suave e capa de gordura equilibrada.",
    shortDescription: "Maciez clássica e sabor suave.",
    suggestedPreparation:
      "Ideal para churrasco em peça inteira ou bifes grossos. Asse em fogo médio preservando a gordura para manter a suculência.",
    harmonization: "Merlot, Malbec jovem ou cervejas vienna lager.",
    tagline: "Suculência tradicional",
    image: maminhaBtqImg,
  },
  {
    name: "Vazio",
    line: "Boutique",
    description:
      "Corte tradicional da parrilla argentina, retirado da lateral traseira do boi. Possui fibras longas, sabor intenso e ótima suculência.",
    shortDescription: "A essência da parrilla.",
    suggestedPreparation:
      "Prepare lentamente na grelha em fogo médio para permitir que a gordura derreta gradualmente, mantendo a carne macia.",
    harmonization: "Malbec argentino, Tannat ou cervejas red ale.",
    tagline: "Sabor autêntico",
    image: vazioBtqImg,
  },
  {
    name: "Entrecot",
    line: "Boutique",
    description:
      "Corte nobre conhecido pelo excelente marmoreio, maciez e sabor intenso. Muito valorizado em grelhados premium.",
    shortDescription: "Marmoreio e maciez excepcionais.",
    suggestedPreparation:
      "Sele rapidamente em fogo alto para criar crosta caramelizada, mantendo o interior ao ponto para preservar a suculência.",
    harmonization: "Cabernet Sauvignon, Malbec reserva ou stout.",
    tagline: "Maciez premium",
    image: entrecotBtqImg,
  },
  // {
  //   name: "Chorizo",
  //   line: "Boutique",
  //   description:
  //     "Corte clássico argentino retirado do contrafilé, reconhecido pela camada uniforme de gordura e sabor marcante.",
  //   shortDescription: "O clássico das parrillas.",
  //   suggestedPreparation:
  //     "Prepare em bifes altos na grelha quente, selando bem os lados para manter o interior macio e suculento.",
  //   harmonization: "Malbec argentino, Carménère ou lager puro malte.",
  //   tagline: "Tradição e sabor",
  //   image: chorizoBtqImg,
  // },
  {
    name: "Chorizo Grill",
    line: "Boutique",
    description:
      "Versão porcionada do tradicional bife de chorizo, ideal para preparo rápido sem perder maciez e sabor.",
    shortDescription: "Praticidade com padrão premium.",
    suggestedPreparation:
      "Grelhe rapidamente em fogo alto até atingir crosta dourada, preservando o centro macio.",
    harmonization: "Cabernet Sauvignon jovem ou cervejas pale ale.",
    tagline: "Pronto para a grelha",
    image: chorizoGrillBtqImg,
  },
  {
    name: "Costela Grill",
    line: "Boutique",
    description:
      "Corte retirado da costela bovina com equilíbrio entre carne e gordura, oferecendo sabor intenso e textura extremamente suculenta.",
    shortDescription: "Suculência intensa na grelha.",
    suggestedPreparation:
      "Ideal para grelha em fogo médio, permitindo caramelização gradual da gordura e preservando a maciez.",
    harmonization: "Tannat, Syrah ou cervejas bock.",
    tagline: "Sabor que impressiona",
    image: costelaGrillBtqImg,
  },
  {
    name: "Short Rib",
    line: "Boutique",
    description:
      "Corte nobre da parte dianteira bovina, extremamente marmorizado e conhecido pela combinação de maciez e sabor intenso.",
    shortDescription: "Marmoreio rico e sabor profundo.",
    suggestedPreparation:
      "Pode ser preparado lentamente ou grelhado em alta temperatura para desenvolver crosta intensa e interior suculento.",
    harmonization: "Malbec reserva, Shiraz ou porter.",
    tagline: "Potência em cada corte",
    image: shortRibBtqImg,
  },
  {
    name: "House Rib",
    line: "Boutique",
    description:
      "Corte especial da costela bovina selecionado pelo alto nível de sabor e maciez, ideal para experiências premium de churrasco.",
    shortDescription: "Costela premium selecionada.",
    suggestedPreparation:
      "Asse lentamente para derreter a gordura entremeada e atingir textura extremamente macia.",
    harmonization: "Tannat uruguaio, Cabernet Sauvignon ou stout.",
    tagline: "A experiência da costela premium",
    image: houseRibBtqImg,
  },
  {
    name: "Skirt Steak",
    line: "Boutique",
    description:
      "Corte fino e fibroso retirado do diafragma bovino, famoso pelo sabor intenso e textura característica.",
    shortDescription: "Fibroso, intenso e suculento.",
    suggestedPreparation:
      "Grelhe rapidamente em fogo muito alto e fatie contra as fibras para garantir maciez.",
    harmonization: "Pinot Noir, Malbec jovem ou IPA.",
    tagline: "Sabor marcante",
    image: skirtSteakBtqImg,
  },
  {
    name: "Petit File",
    line: "Boutique",
    description:
      "Corte extremamente macio retirado do filé mignon, com textura delicada e sabor suave.",
    shortDescription: "Maciez refinada.",
    suggestedPreparation:
      "Prepare rapidamente em fogo alto para preservar a textura macia e o interior suculento.",
    harmonization: "Pinot Noir, Merlot ou cervejas wheat beer.",
    tagline: "Elegância em cada mordida",
    image: petitFileBtqImg,
  },
  {
    name: "Brisket",
    line: "Boutique",
    description:
      "Corte bovino do peito conhecido pelo alto teor de colágeno e sabor intenso, muito utilizado no barbecue americano.",
    shortDescription: "O clássico do barbecue.",
    suggestedPreparation:
      "Ideal para defumação ou cocção lenta prolongada, permitindo quebra do colágeno e máxima maciez.",
    harmonization: "Zinfandel, Syrah ou cervejas smoked porter.",
    tagline: "Defumação e profundidade",
    image: brisketBtqImg,
  },
  {
    name: "Cowboy Steak",
    line: "Boutique",
    description:
      "Corte robusto semelhante ao tomahawk, porém com osso mais curto. Possui alto marmoreio, sabor intenso e excelente suculência.",
    shortDescription: "Robusto e extremamente saboroso.",
    suggestedPreparation:
      "Sele em fogo forte e finalize em calor indireto até o ponto desejado, mantendo o descanso antes de servir.",
    harmonization:
      "Cabernet Sauvignon encorpado, Malbec premium ou barley wine.",
    tagline: "Força e personalidade",
    image: cowboySteakBtqImg,
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
