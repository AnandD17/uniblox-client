import React, { useEffect, useState } from "react";
import { TProduct } from "@/types/product";
import ProductCard from "@/components/product-card";
import ProductsService from "@/services/products";

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    try {
      const products = await ProductsService.getProducts();
      setProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
