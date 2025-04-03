import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <p><strong>${item.price}</strong></p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
