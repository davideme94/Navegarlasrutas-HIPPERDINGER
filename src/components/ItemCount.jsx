import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <div className="d-flex gap-2 justify-content-center my-2">
        <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
        <span className="fw-bold">{count}</span>
        <button className="btn btn-outline-secondary" onClick={increment}>+</button>
      </div>
      <button className="btn btn-success w-100" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
