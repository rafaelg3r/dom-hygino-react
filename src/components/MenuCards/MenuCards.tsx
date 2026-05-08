// index.tsx
import styles from "./styles.module.css";
import { useCurrentLine } from "../../utils/currentLine";
import Card from "../../components/Card/Card";
import { products } from "../../utils/products"; // Importe sua lista

export function MenuCards() {
  const currentLine = useCurrentLine();

  // Filtra os produtos que pertencem à linha selecionada
  const filteredProducts = products.filter(
    (product) => product.line === currentLine,
  );

  if (filteredProducts.length === 0) {
    return <span>Selecione uma linha válida para visualizar os produtos</span>;
  }

  return (
    <div className={styles.menuCardsContainer}>
      <div className={styles.gridCards}>
        {filteredProducts.map((product) => (
          <Card
            key={product.name}
            name={product.name.toUpperCase()}
            tagline={product.tagline}
            shortDescription={product.shortDescription}
            marbling={product.marbling}
            softness={product.softness}
            image={product.image}
            // O link é gerado automaticamente com base nos dados
            link={`/menu?linha=${product.line}&carne=${product.name.toLowerCase()}#Display`}
          />
        ))}
      </div>
    </div>
  );
}
