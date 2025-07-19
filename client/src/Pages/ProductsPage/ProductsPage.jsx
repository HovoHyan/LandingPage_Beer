import React from "react";
import { products } from "../../Data/productsData";
import "./productsPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductsPage = () => {
  return (
    <section className="productsSection">
      <div className="productsHandler">
        {products.map((prod, index) => (
          <ProductCard
            key={index}
            title={prod.title}
            prodImg={prod.prodImg}
            prodDescription={prod.context}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
