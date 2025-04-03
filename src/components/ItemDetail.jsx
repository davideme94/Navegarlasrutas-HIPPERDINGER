import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="card p-4">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>${item.price}</strong></p>
      <ItemCount stock={item.stock} initial={1} onAdd={(qty) => console.log(`Agregado ${qty} al carrito`)} />
    </div>
  );
};

export default ItemDetail;
