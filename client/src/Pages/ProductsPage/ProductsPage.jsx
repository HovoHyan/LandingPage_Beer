import React from "react";
import { compactTextProds } from "../../Data/productsData";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./productsPage.scss";

const ProductsPage = () => {
  return (
    <section className="productsSection">
      <div className="productsHandler">
        {compactTextProds.map((prod, index) => (
          <ProductCard
            key={index}
            color={prod.color}
            stats={prod.stats}
            title={prod.title}
            prodImg={prod.prodImg}
            prodDescription={prod.context.split("?").slice(-2)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
