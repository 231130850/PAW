import React from 'react';
import ProductCard from '../molecules/ProductCard';
import allProducts from "../../Data/product";
import "./ProductSection.css";

const ProductSection = () => {
    return (
        <section id="products">
            <h2 className="title-section">-- All Products --</h2>
            <div className="product-container">
                {allProducts.map((product) => {
                    return (
                        <ProductCard
                        key={product.id}
                        cover="not-available.jpeg"
                        title={product.nama_product}
                        description={product.deskripsi}
                        category={product.kategori}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ProductSection;