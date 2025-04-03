const products = [
    { id: "1", title: "Camiseta Boca", category: "futbol", price: 10000, description: "Camiseta original Boca Juniors" },
    { id: "2", title: "Pelota Adidas", category: "futbol", price: 6000, description: "Pelota profesional" },
    { id: "3", title: "Remera Running", category: "deportes", price: 7000, description: "Remera liviana para correr" },
    { id: "4", title: "Zapatillas Trail", category: "deportes", price: 15000, description: "Para montaña y tierra" },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find((p) => p.id === id)), 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.filter((p) => p.category === categoryId)), 1000);
    });
  };
  