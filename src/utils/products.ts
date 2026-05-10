//Boutique
import denverBtqImg from "../assets/menu/carnes/BOUTIQUE/denver-btq.png";
import tomahawkBtqImg from "../assets/menu/carnes/BOUTIQUE/tomahawk-btq.png";
import tomahawkSmallerBtqImg from "../assets/menu/carnes/BOUTIQUE/tomahawk-btq-smaller.png";
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
import petitFileSmallerBtqImg from "../assets/menu/carnes/BOUTIQUE/petit-filet-btq-smaller.png";
import brisketBtqImg from "../assets/menu/carnes/BOUTIQUE/brisket-btq.png";
import cowboySteakBtqImg from "../assets/menu/carnes/BOUTIQUE/cowboy-steak-btq.png";
// Novilho
import picanhaNovImg from "../assets/menu/carnes/NOVILHO/picanha-nov.png";
import maminhaNovImg from "../assets/menu/carnes/NOVILHO/maminha-nov.png";
import vazioBifeNovImg from "../assets/menu/carnes/NOVILHO/vazio-bife-nov.png";
import vazioLargoNovImg from "../assets/menu/carnes/NOVILHO/vazio-nov.png";
import fileMignonNovImg from "../assets/menu/carnes/NOVILHO/file-m-nov.png";
import entrecotNovImg from "../assets/menu/carnes/NOVILHO/entrecot-nov.png";
import chorizoNovImg from "../assets/menu/carnes/NOVILHO/bife-de-chorizo-nov.png";
import bananinhaNovImg from "../assets/menu/carnes/NOVILHO/bananinha-nov.png";
import patinhoNovImg from "../assets/menu/carnes/NOVILHO/patinho-nov.png";
import lagartoNovImg from "../assets/menu/carnes/NOVILHO/lagarto-p-nov.png";
import coxaoMoleNovImg from "../assets/menu/carnes/NOVILHO/coxao-mole-nov.png";
import costelaEmTiraNovImg from "../assets/menu/carnes/NOVILHO/costela-em-tira-nov.png";
import primeRibNovImg from "../assets/menu/carnes/NOVILHO/prime-rib-nov.png";
import tBoneNovImg from "../assets/menu/carnes/NOVILHO/t-bone-nov.png";
import granitoNovImg from "../assets/menu/carnes/NOVILHO/granito-nov.png";
import chorizoGrillNovImg from "../assets/menu/carnes/NOVILHO/chorizo-grill-nov.png";
import entranhaFinaNovImg from "../assets/menu/carnes/NOVILHO/entranha-fina-nov.png";
import anchoGrillNovImg from "../assets/menu/carnes/NOVILHO/ancho-grill-nov.png";
import capaDeFileNovImg from "../assets/menu/carnes/NOVILHO/capa-de-file-nov.png";
//Pampeira
import maminhaPmpImg from "../assets/menu/carnes/PAMPEIRA/maminha-pmp.png";
import acemPmpImg from "../assets/menu/carnes/PAMPEIRA/acem-pmp.png";
import paletaPmpImg from "../assets/menu/carnes/PAMPEIRA/paleta-pmp.png";
import picanhaPmpImg from "../assets/menu/carnes/PAMPEIRA/picanha-pmp.png";
import vazioPmpImg from "../assets/menu/carnes/PAMPEIRA/vazio-pmp.png";

// campo Nobre
import anchoGrillNobImg from "../assets/menu/carnes/NOBRE/ancho-grill-nob.png";
import picanhaNobImg from "../assets/menu/carnes/NOBRE/picanha-nob.png";
import fileMignonNobImg from "../assets/menu/carnes/NOBRE/file-mignon-nob.png";
import entrecotNobImg from "../assets/menu/carnes/NOBRE/entrecot-nob.png";
import chorizoNobImg from "../assets/menu/carnes/NOBRE/chorizo-grill-nob.png";
import bananinhaNobImg from "../assets/menu/carnes/NOBRE/bananinha-nob.png";
import patinhoNobImg from "../assets/menu/carnes/NOBRE/patinho-nob.png";
import lagartoNobImg from "../assets/menu/carnes/NOBRE/lagarto-p-nob.png";
import lagartoPequenoNobImg from "../assets/menu/carnes/NOBRE/lagarto-p-nob.png";
import coxaoMoleNobImg from "../assets/menu/carnes/NOBRE/coxao-mole-nob.png";
import vazioLargoNobImg from "../assets/menu/carnes/NOBRE/vazio-nob.png";
import capaDeFileNobImg from "../assets/menu/carnes/NOBRE/capa-de-file-nob.png";
import aranhaAlcatraNobImg from "../assets/menu/carnes/NOBRE/aranha-de-alcatra-nob.png";
import costelaGrillNobImg from "../assets/menu/carnes/NOBRE/costela-grill-nob.png";
import ossobucoNobImg from "../assets/menu/carnes/NOBRE/ossobuco-nob.png";
import cupimNobImg from "../assets/menu/carnes/NOBRE/cupim-nob.png";
import granitoNobImg from "../assets/menu/carnes/NOBRE/granito-nob.png";
import chorizoGrillNobImg from "../assets/menu/carnes/NOBRE/chorizo-grill-nob.png";

// Dia a dia
export type Product = {
  name: string;
  line: "Boutique" | "Novilho Jovem" | "Campo Nobre" | "Pampeira" | "Dia a dia";
  description: string;
  shortDescription: string;
  suggestedPreparation: string;
  harmonization: string;
  tagline: string;
  marbling: number;
  softness: number;
  image: string;
  smallerImage?: string;
};

export const products: Product[] = [
  // LINHA BOUTIQUE
  //denver
  {
    name: "Denver",
    line: "Boutique",
    description:
      "Corte macio e suculento, conhecido por seu sabor intenso e textura única. É uma escolha popular entre os amantes de carne que buscam uma opção premium e cheia de sabor.",
    shortDescription: "Marmoreio intenso e sabor marcante.",
    suggestedPreparation:
      "Prepare em bifes altos, selando em fogo forte para criar crosta caramelizada sem perder a suculência interna. Finalize ao ponto e fatie contra as fibras antes de servir.",
    harmonization:
      "Malbec reserva, Cabernet Sauvignon ou cervejas IPA e amber ale.",
    tagline: "Suculência em alto nível",
    softness: 4,
    marbling: 4,
    image: denverBtqImg,
  },
  //tomahawk
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
    softness: 5,
    marbling: 5,
    image: tomahawkBtqImg,
    smallerImage: tomahawkSmallerBtqImg, // Usando a mesma imagem para ambos os propósitos
  },
  //matambre
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
    marbling: 1,
    softness: 3,
    image: matambreBtqImg,
  },
  //shank
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
    softness: 3,
    marbling: 1,
    image: shankBtqImg,
  },
  //steak shoulder
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
    softness: 3,
    marbling: 2,
    image: steakShoulderBtqImg,
  },
  //maminha
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
    softness: 4,
    marbling: 2,
    image: maminhaBtqImg,
  },
  //vazio
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
    softness: 3,
    marbling: 3,
    image: vazioBtqImg,
  },
  //entrecot
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
    softness: 5,
    marbling: 5,
    image: entrecotBtqImg,
  },
  //chorizo grill
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
    softness: 4,
    marbling: 4,
    image: chorizoGrillBtqImg,
  },
  //costela grill
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
    softness: 4,
    marbling: 4,
    image: costelaGrillBtqImg,
  },
  //short rib
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
    softness: 5,
    marbling: 5,
    image: shortRibBtqImg,
  },
  //house rib
  {
    name: "House Rib",
    line: "Boutique",
    description:
      "Corte especial da costela bovina selecionado pelo alto nível de sabor e maciez, ideal para experiências premium de churrasco.",
    shortDescription: "Costela premium selecionada.",
    suggestedPreparation:
      "Asse lentamente para derreter a gordura entremeada e atingir textura extremamente macia.",
    harmonization: "Tannat uruguaio, Cabernet Sauvignon ou stout.",
    tagline: "Experiência premium da costela",
    softness: 5,
    marbling: 4,
    image: houseRibBtqImg,
  },
  //skirt steak
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
    softness: 3,
    marbling: 2,
    image: skirtSteakBtqImg,
  },
  //petit file
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
    softness: 5,
    marbling: 1,
    smallerImage: petitFileSmallerBtqImg,
    image: petitFileBtqImg,
  },
  //brisket
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
    softness: 4,
    marbling: 3,
    image: brisketBtqImg,
  },
  //cowboy steak
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
    softness: 5,
    marbling: 5,
    image: cowboySteakBtqImg,
  },

  // LINHA NOVILHO JOVEM
  {
    name: "Picanha",
    line: "Novilho Jovem",
    description:
      "Corte nobre e tradicional do churrasco brasileiro, reconhecido pela capa de gordura que proporciona suculência e sabor marcante.",
    shortDescription: "O clássico do churrasco.",
    suggestedPreparation:
      "Ideal para grelha ou espeto em fogo médio-alto, preservando a gordura para garantir maciez e suculência.",
    harmonization: "Malbec jovem, Cabernet Sauvignon ou cervejas puro malte.",
    tagline: "Suculência incomparável",
    marbling: 3,
    softness: 4,
    image: picanhaNovImg,
  },
  {
    name: "Maminha",
    line: "Novilho Jovem",
    description:
      "Corte macio localizado na ponta da alcatra, conhecido pela textura suave e sabor equilibrado.",
    shortDescription: "Maciez e equilíbrio.",
    suggestedPreparation:
      "Prepare inteira na churrasqueira ou em bifes altos para preservar a suculência.",
    harmonization: "Merlot, Pinot Noir ou amber ale.",
    tagline: "Leveza e sabor",
    marbling: 2,
    softness: 4,
    image: maminhaNovImg,
  },
  {
    name: "Vazio Bife",
    line: "Novilho Jovem",
    description:
      "Versão em bifes do tradicional vazio, corte de fibras longas e sabor intenso muito valorizado na parrilla.",
    shortDescription: "Sabor autêntico da parrilla.",
    suggestedPreparation:
      "Grelhe rapidamente em fogo forte e sirva fatiado contra as fibras.",
    harmonization: "Malbec argentino ou red ale.",
    tagline: "Intensidade e tradição",
    marbling: 3,
    softness: 3,
    image: vazioBifeNovImg,
  },
  {
    name: "Vazio Largo",
    line: "Novilho Jovem",
    description:
      "Corte robusto da lateral bovina, conhecido pelas fibras marcantes e excelente sabor na churrasqueira.",
    shortDescription: "Fibra marcante e muita suculência.",
    suggestedPreparation:
      "Ideal para grelha em fogo médio com descanso antes do corte.",
    harmonization: "Tannat uruguaio ou IPA.",
    tagline: "Essência do churrasco",
    marbling: 3,
    softness: 3,
    image: vazioLargoNovImg,
  },
  {
    name: "File Mignon",
    line: "Novilho Jovem",
    description:
      "O corte mais macio do boi, com fibras delicadas e sabor suave, ideal para preparos refinados.",
    shortDescription: "Extrema maciez.",
    suggestedPreparation:
      "Sele rapidamente em fogo alto para preservar a textura macia.",
    harmonization: "Pinot Noir, Merlot ou wheat beer.",
    tagline: "Maciez absoluta",
    marbling: 1,
    softness: 5,
    image: fileMignonNovImg,
  },
  {
    name: "Entrecot",
    line: "Novilho Jovem",
    description:
      "Corte retirado do contrafilé com excelente marmoreio, sabor intenso e grande suculência.",
    shortDescription: "Marmoreio e sabor intenso.",
    suggestedPreparation:
      "Prepare em fogo alto para formar crosta caramelizada mantendo o interior suculento.",
    harmonization: "Cabernet Sauvignon ou stout.",
    tagline: "Suculência premium",
    marbling: 5,
    softness: 5,
    image: entrecotNovImg,
  },
  {
    name: "Chorizo",
    line: "Novilho Jovem",
    description:
      "Corte clássico argentino do contrafilé, com capa de gordura uniforme e sabor marcante.",
    shortDescription: "O clássico argentino.",
    suggestedPreparation: "Ideal em bifes altos na grelha ou parrilla.",
    harmonization: "Malbec ou lager puro malte.",
    tagline: "Tradição na brasa",
    marbling: 4,
    softness: 4,
    image: chorizoNovImg,
  },
  {
    name: "Bananinha",
    line: "Novilho Jovem",
    description:
      "Corte pequeno retirado entre os ossos da costela, extremamente saboroso e muito apreciado em churrascos.",
    shortDescription: "Pequena no tamanho, gigante no sabor.",
    suggestedPreparation:
      "Prepare rapidamente em fogo forte para caramelizar a gordura.",
    harmonization: "IPA ou cervejas amber ale.",
    tagline: "Sabor surpreendente",
    marbling: 4,
    softness: 4,
    image: bananinhaNovImg,
  },
  {
    name: "Patinho",
    line: "Novilho Jovem",
    description:
      "Corte magro e versátil retirado da parte traseira bovina, conhecido pela maciez moderada e fibras curtas.",
    shortDescription: "Versatilidade no preparo.",
    suggestedPreparation: "Ideal para bifes, picadinhos ou preparos rápidos.",
    harmonization: "Merlot jovem ou pilsner.",
    tagline: "Leve e versátil",
    marbling: 1,
    softness: 3,
    image: patinhoNovImg,
  },
  {
    name: "Lagarto",
    line: "Novilho Jovem",
    description:
      "Corte de fibras longas localizado na parte traseira do boi, muito utilizado em assados e cozidos.",
    shortDescription: "Fibras longas e sabor marcante.",
    suggestedPreparation: "Ideal para cozimento lento ou assados com molho.",
    harmonization: "Syrah ou brown ale.",
    tagline: "Tradição nos assados",
    marbling: 1,
    softness: 2,
    image: lagartoNovImg,
  },
  {
    name: "Coxao Mole",
    line: "Novilho Jovem",
    description:
      "Corte macio da parte interna da coxa bovina, muito utilizado em bifes e preparos do dia a dia.",
    shortDescription: "Maciez equilibrada.",
    suggestedPreparation:
      "Ideal para bifes grelhados, escalopes ou picadinhos.",
    harmonization: "Merlot ou lager.",
    tagline: "Macio e versátil",
    marbling: 2,
    softness: 4,
    image: coxaoMoleNovImg,
  },
  {
    name: "Costela em Tira",
    line: "Novilho Jovem",
    description:
      "Corte transversal da costela bovina muito tradicional na parrilla, conhecido pelo sabor intenso e suculência.",
    shortDescription: "O sabor da parrilla.",
    suggestedPreparation:
      "Prepare lentamente na grelha para derreter a gordura entremeada.",
    harmonization: "Tannat ou porter.",
    tagline: "Força e tradição",
    marbling: 4,
    softness: 4,
    image: costelaEmTiraNovImg,
  },
  {
    name: "Prime Rib",
    line: "Novilho Jovem",
    description:
      "Corte nobre retirado do filé de costela com osso, conhecido pelo alto marmoreio e extrema suculência.",
    shortDescription: "Marmoreio premium.",
    suggestedPreparation: "Sele em fogo forte e finalize em calor indireto.",
    harmonization: "Cabernet Sauvignon reserva ou stout.",
    tagline: "Experiência premium",
    marbling: 5,
    softness: 5,
    image: primeRibNovImg,
  },
  {
    name: "T-Bone",
    line: "Novilho Jovem",
    description:
      "Corte icônico que une contrafilé e filé mignon separados pelo osso em formato de T.",
    shortDescription: "Dois cortes em uma experiência.",
    suggestedPreparation:
      "Ideal para grelha em alta temperatura mantendo os diferentes pontos de cocção.",
    harmonization: "Cabernet Sauvignon ou barley wine.",
    tagline: "O equilíbrio perfeito",
    marbling: 4,
    softness: 5,
    image: tBoneNovImg,
  },
  {
    name: "Granito",
    line: "Novilho Jovem",
    description:
      "Corte bovino conhecido pela combinação de fibras marcantes, sabor intenso e boa suculência quando grelhado.",
    shortDescription: "Textura e intensidade.",
    suggestedPreparation:
      "Grelhe rapidamente em fogo alto e fatie contra as fibras.",
    harmonization: "Syrah ou IPA.",
    tagline: "Personalidade na brasa",
    marbling: 2,
    softness: 3,
    image: granitoNovImg,
  },
  {
    name: "Chorizo Grill",
    line: "Novilho Jovem",
    description:
      "Versão porcionada do tradicional bife de chorizo, ideal para preparo rápido mantendo maciez e sabor.",
    shortDescription: "Praticidade premium.",
    suggestedPreparation: "Prepare em fogo alto até formar crosta dourada.",
    harmonization: "Malbec jovem ou pale ale.",
    tagline: "Feito para a grelha",
    marbling: 4,
    softness: 4,
    image: chorizoGrillNovImg,
  },
  {
    name: "Entranha Fina",
    line: "Novilho Jovem",
    description:
      "Corte fino e extremamente saboroso retirado do diafragma bovino, muito apreciado na parrilla.",
    shortDescription: "Fibra intensa e muito sabor.",
    suggestedPreparation:
      "Prepare rapidamente em fogo forte e sirva mal passada.",
    harmonization: "Malbec ou IPA.",
    tagline: "Sabor marcante",
    marbling: 2,
    softness: 3,
    image: entranhaFinaNovImg,
  },
  {
    name: "Ancho Grill",
    line: "Novilho Jovem",
    description:
      "Versão porcionada do ancho, corte extremamente macio e marmorizado retirado do filé de costela.",
    shortDescription: "Maciez e marmoreio.",
    suggestedPreparation:
      "Grelhe em alta temperatura preservando o interior suculento.",
    harmonization: "Cabernet Sauvignon ou stout.",
    tagline: "O auge da suculência",
    marbling: 5,
    softness: 5,
    image: anchoGrillNovImg,
  },
  {
    name: "Capa de Filé",
    line: "Novilho Jovem",
    description:
      "Parte superior do contrafilé conhecida pelo sabor intenso e gordura entremeada que proporciona suculência.",
    shortDescription: "Sabor intenso e marcante.",
    suggestedPreparation: "Ideal para grelha ou cozimento lento.",
    harmonization: "Syrah ou porter.",
    tagline: "Intensidade em cada corte",
    marbling: 4,
    softness: 3,
    image: capaDeFileNovImg,
  },

  // LINHA PAMPEIRA

  {
    name: "Acem",
    line: "Pampeira",
    description:
      "Corte dianteiro bovino conhecido pelo sabor marcante e boa presença de gordura e colágeno, muito utilizado em assados, cozidos e churrascos.",
    shortDescription: "Sabor intenso e tradicional.",
    suggestedPreparation:
      "Ideal para cozimentos lentos, panela ou assados prolongados para maior maciez.",
    harmonization: "Syrah, Merlot encorpado ou brown ale.",
    tagline: "Força e sabor",
    marbling: 2,
    softness: 3,
    image: acemPmpImg,
  },
  {
    name: "Maminha",
    line: "Pampeira",
    description:
      "Corte macio localizado na ponta da alcatra, conhecido pela textura suave e sabor equilibrado.",
    shortDescription: "Maciez e suculência.",
    suggestedPreparation:
      "Ideal para churrasqueira ou forno, mantendo a gordura para preservar a umidade da carne.",
    harmonization: "Merlot, Pinot Noir ou amber ale.",
    tagline: "Leveza na brasa",
    marbling: 2,
    softness: 4,
    image: maminhaPmpImg,
  },
  {
    name: "Paleta",
    line: "Pampeira",
    description:
      "Corte dianteiro com fibras marcantes e sabor intenso, muito utilizado em cozidos, assados e churrascos tradicionais.",
    shortDescription: "Rusticidade e sabor.",
    suggestedPreparation:
      "Ideal para cozimento lento ou assados longos para atingir maior maciez.",
    harmonization: "Tannat, Syrah ou porter.",
    tagline: "Tradição campeira",
    marbling: 2,
    softness: 3,
    image: paletaPmpImg,
  },
  {
    name: "Picanha",
    line: "Pampeira",
    description:
      "Corte clássico do churrasco brasileiro, reconhecido pela capa de gordura que proporciona sabor e suculência característicos.",
    shortDescription: "O clássico do churrasco.",
    suggestedPreparation:
      "Prepare em espeto ou grelha em fogo médio-alto preservando a gordura.",
    harmonization: "Malbec, Cabernet Sauvignon ou lager puro malte.",
    tagline: "A alma da churrasqueira",
    marbling: 3,
    softness: 4,
    image: picanhaPmpImg,
  },
  {
    name: "Vazio",
    line: "Pampeira",
    description:
      "Corte tradicional da parrilla retirado da lateral bovina, conhecido pelo sabor intenso e fibras marcantes.",
    shortDescription: "Autenticidade da parrilla.",
    suggestedPreparation:
      "Ideal para preparo lento em fogo médio preservando a suculência.",
    harmonization: "Malbec argentino, Tannat ou red ale.",
    tagline: "Sabor tradicional",
    marbling: 3,
    softness: 3,
    image: vazioPmpImg,
  },
  // LINHA NOBRE

  {
    name: "Picanha",
    line: "Campo Nobre",
    description:
      "Corte nobre tradicional do churrasco brasileiro, conhecido pela capa de gordura que intensifica sabor e suculência durante o preparo.",
    shortDescription: "O clássico da brasa.",
    suggestedPreparation:
      "Ideal para grelha ou espeto em fogo médio-alto, preservando a gordura para máxima suculência.",
    harmonization: "Malbec, Cabernet Sauvignon ou lager puro malte.",
    tagline: "Tradição e suculência",
    marbling: 3,
    softness: 4,
    image: picanhaNobImg,
  },
  {
    name: "Vazio Largo",
    line: "Campo Nobre",
    description:
      "Corte da lateral traseira bovina com fibras marcantes e sabor intenso, muito valorizado na parrilla.",
    shortDescription: "A essência da parrilla.",
    suggestedPreparation:
      "Prepare lentamente em fogo médio para preservar a maciez e derreter a gordura.",
    harmonization: "Tannat uruguaio ou red ale.",
    tagline: "Sabor autêntico",
    marbling: 3,
    softness: 3,
    image: vazioLargoNobImg,
  },
  {
    name: "File Mignon",
    line: "Campo Nobre",
    description:
      "Corte extremamente macio e de sabor suave, retirado da região lombar bovina.",
    shortDescription: "Maciez incomparável.",
    suggestedPreparation:
      "Sele rapidamente em fogo forte preservando o interior suculento.",
    harmonization: "Pinot Noir, Merlot ou wheat beer.",
    tagline: "Delicadeza e maciez",
    marbling: 1,
    softness: 5,
    image: fileMignonNobImg,
  },
  {
    name: "Entrecot",
    line: "Campo Nobre",
    description:
      "Corte nobre com alto marmoreio, conhecido pela combinação de sabor intenso e extrema suculência.",
    shortDescription: "Marmoreio premium.",
    suggestedPreparation:
      "Ideal para grelha em alta temperatura mantendo o interior ao ponto.",
    harmonization: "Cabernet Sauvignon ou stout.",
    tagline: "Suculência elevada",
    marbling: 5,
    softness: 5,
    image: entrecotNobImg,
  },
  {
    name: "Lagarto",
    line: "Campo Nobre",
    description:
      "Corte magro de fibras longas muito utilizado em assados, cozidos e preparos lentos.",
    shortDescription: "Tradicional e versátil.",
    suggestedPreparation: "Ideal para cozimento lento ou assados com molho.",
    harmonization: "Syrah ou brown ale.",
    tagline: "Tradição no preparo",
    marbling: 1,
    softness: 2,
    image: lagartoNobImg,
  },
  {
    name: "Chorizo",
    line: "Campo Nobre",
    description:
      "Corte clássico argentino retirado do contrafilé, conhecido pelo sabor intenso e excelente equilíbrio entre carne e gordura.",
    shortDescription: "O sabor da parrilla.",
    suggestedPreparation: "Prepare em bifes altos na grelha ou parrilla.",
    harmonization: "Malbec argentino ou lager puro malte.",
    tagline: "Tradição argentina",
    marbling: 4,
    softness: 4,
    image: chorizoNobImg,
  },
  {
    name: "Capa de File",
    line: "Campo Nobre",
    description:
      "Parte superior do contrafilé com sabor marcante e boa presença de gordura entremeada.",
    shortDescription: "Intenso e suculento.",
    suggestedPreparation: "Ideal para grelha em fogo alto ou preparo lento.",
    harmonization: "Syrah ou porter.",
    tagline: "Sabor encorpado",
    marbling: 4,
    softness: 3,
    image: capaDeFileNobImg,
  },
  {
    name: "Bananinha",
    line: "Campo Nobre",
    description:
      "Pequeno corte retirado entre os ossos da costela bovina, conhecido pelo sabor intenso e alta suculência.",
    shortDescription: "Pequeno corte, grande sabor.",
    suggestedPreparation:
      "Prepare rapidamente em fogo forte para caramelizar a gordura.",
    harmonization: "IPA ou amber ale.",
    tagline: "Suculência marcante",
    marbling: 4,
    softness: 4,
    image: bananinhaNobImg,
  },
  {
    name: "Aranha da Alcatra",
    line: "Campo Nobre",
    description:
      "Corte raro e muito saboroso localizado na parte interna da alcatra, conhecido pelas fibras delicadas e excelente suculência.",
    shortDescription: "Raro e extremamente saboroso.",
    suggestedPreparation: "Ideal para grelha rápida em fogo forte.",
    harmonization: "Malbec jovem ou IPA.",
    tagline: "Uma joia escondida",
    marbling: 3,
    softness: 4,
    image: aranhaAlcatraNobImg,
  },
  {
    name: "Patinho",
    line: "Campo Nobre",
    description:
      "Corte magro e versátil da parte traseira bovina, muito utilizado em bifes e preparos rápidos.",
    shortDescription: "Leve e funcional.",
    suggestedPreparation: "Ideal para bifes, picadinhos ou grelhados rápidos.",
    harmonization: "Merlot jovem ou pilsner.",
    tagline: "Versatilidade no dia a dia",
    marbling: 1,
    softness: 3,
    image: patinhoNobImg,
  },
  {
    name: "Lagarto Pequeno",
    line: "Campo Nobre",
    description:
      "Versão menor e mais uniforme do lagarto, mantendo fibras longas e sabor característico.",
    shortDescription: "Textura firme e sabor marcante.",
    suggestedPreparation: "Ideal para assados lentos e cozidos.",
    harmonization: "Syrah ou brown ale.",
    tagline: "Tradição nos cozidos",
    marbling: 1,
    softness: 2,
    image: lagartoPequenoNobImg,
  },
  {
    name: "Coxão Mole",
    line: "Campo Nobre",
    description:
      "Corte macio da parte interna da coxa bovina, conhecido pela textura suave e versatilidade.",
    shortDescription: "Macio e versátil.",
    suggestedPreparation: "Ideal para bifes, escalopes e grelhados rápidos.",
    harmonization: "Merlot ou lager.",
    tagline: "Equilíbrio e praticidade",
    marbling: 2,
    softness: 4,
    image: coxaoMoleNobImg,
  },
  {
    name: "Costela Grill",
    line: "Campo Nobre",
    description:
      "Corte retirado da costela bovina com excelente equilíbrio entre carne e gordura.",
    shortDescription: "Intensidade e suculência.",
    suggestedPreparation:
      "Prepare lentamente em fogo médio para caramelizar a gordura.",
    harmonization: "Tannat ou porter.",
    tagline: "O sabor da costela",
    marbling: 4,
    softness: 4,
    image: costelaGrillNobImg,
  },
  {
    name: "Cupim",
    line: "Campo Nobre",
    description:
      "Corte dianteiro extremamente valorizado pela gordura entremeada e textura macia após longo cozimento.",
    shortDescription: "Maciez que desmancha.",
    suggestedPreparation: "Ideal para assados longos ou defumação.",
    harmonization: "Syrah encorpado ou stout.",
    tagline: "Suculência intensa",
    marbling: 4,
    softness: 5,
    image: cupimNobImg,
  },
  {
    name: "Ossobuco",
    line: "Campo Nobre",
    description:
      "Corte retirado do músculo bovino com osso, rico em colágeno e sabor intenso.",
    shortDescription: "Profundidade de sabor.",
    suggestedPreparation: "Ideal para cozimento lento e ensopados.",
    harmonization: "Merlot encorpado ou porter.",
    tagline: "Perfeito para cocção lenta",
    marbling: 1,
    softness: 4,
    image: ossobucoNobImg,
  },
  {
    name: "Granito",
    line: "Campo Nobre",
    description:
      "Corte de sabor intenso e fibras marcantes, valorizado em preparos rápidos na grelha.",
    shortDescription: "Textura e personalidade.",
    suggestedPreparation: "Grelhe rapidamente em fogo alto e sirva fatiado.",
    harmonization: "Syrah ou IPA.",
    tagline: "Força na brasa",
    marbling: 2,
    softness: 3,
    image: granitoNobImg,
  },
  {
    name: "Chorizo Grill",
    line: "Campo Nobre",
    description:
      "Versão porcionada do tradicional chorizo, mantendo sabor intenso e ótima suculência.",
    shortDescription: "Praticidade premium.",
    suggestedPreparation: "Ideal para preparo rápido em fogo alto.",
    harmonization: "Malbec jovem ou pale ale.",
    tagline: "Feito para grelhar",
    marbling: 4,
    softness: 4,
    image: chorizoGrillNobImg,
  },
  {
    name: "Ancho Grill",
    line: "Campo Nobre",
    description:
      "Versão porcionada do ancho, corte conhecido pelo alto marmoreio e extrema maciez.",
    shortDescription: "Marmoreio excepcional.",
    suggestedPreparation:
      "Prepare em alta temperatura mantendo o interior suculento.",
    harmonization: "Cabernet Sauvignon ou stout.",
    tagline: "O auge da suculência",
    marbling: 5,
    softness: 5,
    image: anchoGrillNobImg,
  },
  // LINHA DIA A DIA
];
