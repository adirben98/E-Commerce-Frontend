import { useEffect, useState } from "react";
import styled from "styled-components";
import Product, { ProductProps } from "./Product";
import axios from "axios";
import { Filters } from "../pages/ProductList";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
type ProductsProps = {
  cat?: string;
  filters?: Filters;
  sort?: string;
};

const Products = ({ cat, filters, sort }: ProductsProps) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const getProducts = async (signal:AbortSignal) => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/products?category=${cat}`
            : "http://localhost:3000/products",{signal}
        );
        setProducts(res.data);
      } catch (err) {
        if(axios.isCancel(err))
          return
      }
    };
    const controller=new AbortController()
    getProducts(controller.signal);
    return ()=>controller.abort()
  }, [cat]);
console.log(filteredProducts)
useEffect(() => {
  if (cat && filters) {
    setFilteredProducts(
      products.filter((item) => {
        const colorMatch = filters.color ? item.color.includes(filters.color) : true;
        const sizeMatch = filters.size ? item.size.includes(filters.size) : true;

        return colorMatch && sizeMatch; 
      })
    );
  }
}, [products, cat, filters]);



  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
