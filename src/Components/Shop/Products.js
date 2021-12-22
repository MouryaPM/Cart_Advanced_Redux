import styles from "./Products.module.css";
import ProductItem from "./ProductItem";
const DUMMY_ARRAY = [
  {
    id: "p1",
    price: 6,
    name: "Short history of nearly everything",
    description: "Book By Bill Bryson",
  },
  {
    id: "p2",
    price: 10,
    name: "Life of Pi",
    description: "Book By Yaan Martel",
  },
];
const Products = () => {
  return (
    <section className={styles.products}>
      <h2>Buy Product</h2>
      <ul>
        {DUMMY_ARRAY.map((product) => (
          <ProductItem
            title={product.name}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
