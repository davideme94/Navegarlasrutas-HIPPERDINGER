import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={item.image} alt={item.title} className="card-img-top" style={{ maxHeight: "200px", objectFit: "contain" }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p><strong>${item.price}</strong></p>
          <Link to={`/item/${item.id}`} className="btn btn-primary mt-auto">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
