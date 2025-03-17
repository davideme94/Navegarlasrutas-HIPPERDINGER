import React from "react";

const ItemListContainer = ({ mensaje }) => {
  return (
    <section className="container mt-5 pt-5 text-center">
      <h2 className="fw-bold p-4 bg-light shadow rounded">{mensaje}</h2>
    </section>
  );
};

export default ItemListContainer;
