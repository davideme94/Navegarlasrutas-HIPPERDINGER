import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../mockProducts";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory : getProducts;
    fetchData(categoryId).then(setItems);
  }, [categoryId]);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
