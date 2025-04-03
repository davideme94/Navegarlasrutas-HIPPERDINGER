import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p><strong>${item.price}</strong></p>
        {/* Más adelante: agregar ItemCount aquí */}
        <button className="btn btn-success">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
