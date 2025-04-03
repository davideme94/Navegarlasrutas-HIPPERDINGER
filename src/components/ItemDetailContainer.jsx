import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mockProducts";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  return (
    <div className="container mt-5 pt-5">
      {product ? <ItemDetail item={product} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
