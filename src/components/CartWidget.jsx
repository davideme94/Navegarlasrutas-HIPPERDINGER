import React from "react";

const CartWidget = () => {
  return (
    <button className="btn btn-outline-light ms-3 position-relative">
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">0</span>
    </button>
  );
};

export default CartWidget;
