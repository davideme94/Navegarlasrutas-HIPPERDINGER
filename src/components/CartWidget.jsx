import React from "react";

const CartWidget = () => {
  return (
    <button className="btn btn-danger position-relative ms-3">
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
        3
      </span>
    </button>
  );
};

export default CartWidget;
