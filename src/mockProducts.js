const products = [
  {
    id: "1",
    title: "Mouse Logitech G203",
    category: "mouses",
    price: 8500,
    description: "Mouse gamer RGB con luces LED y sensor óptico.",
    stock: 10,
    image: "https://www.xt-pc.com.ar/img/productos/14/MOU454.jpg"
  },
  {
    id: "2",
    title: "Teclado Redragon Kumara",
    category: "teclados",
    price: 15000,
    description: "Teclado mecánico retroiluminado, switches Outemu.",
    stock: 5,
    image: "https://gorilagames.com/img/Public/1019-producto-redragon-kumara-rgb-2894.jpg"
  },
  {
    id: "3",
    title: "Parlantes Logitech Z313",
    category: "parlantes",
    price: 13000,
    description: "Sistema de sonido 2.1 con subwoofer compacto.",
    stock: 8,
    image: "https://m.media-amazon.com/images/I/81wcaJsMCTL._AC_SL1500_.jpg"
  },
  {
    id: "4",
    title: "Impresora HP Ink Tank",
    category: "impresoras",
    price: 35000,
    description: "Impresora multifunción con WiFi, impresión económica.",
    stock: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNkG9VEJc4HgdhOL4sHPca8yAOqWznYALJQ&s"
  }
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 1000));

export const getProductById = (id) =>
  new Promise((resolve) => setTimeout(() => resolve(products.find(p => p.id === id)), 1000));

export const getProductsByCategory = (categoryId) =>
  new Promise((resolve) => setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 1000));
