// Sample menu data
export const menuData = [
  // Pratos Principais
  {
    id: 'b1',
    name: 'Hambúrguer Clássico',
    price: 25,
    category: 'Pratos Principais',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    description: 'Pão, carne 180g, queijo, alface e tomate',
    popular: true,
    variants: [
      { id: 'b1-1', name: 'Simples', price: 25 },
      { id: 'b1-2', name: 'Duplo', price: 40 }
    ],
    addons: [
      { id: '1', name: 'Bacon Extra', price: 5, category: 'sides' as const },
      { id: '2', name: 'Queijo Extra', price: 3, category: 'sides' as const }
    ]
  },
  // Entradas
  {
    id: 'sd1',
    name: 'Batata Frita',
    price: 15,
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500',
    description: 'Porção individual de batatas crocantes',
    popular: true,
    variants: [
      { id: 'sd1-1', name: 'Pequena', price: 15 },
      { id: 'sd1-2', name: 'Grande', price: 25 }
    ],
    addons: [
      { id: '15', name: 'Molho de Queijo', price: 5, category: 'sides' as const }
    ]
  },
  // Bebidas
  {
    id: 'd1',
    name: 'Suco de Laranja',
    price: 10,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1576092729250-59c240b79878?w=500',
    description: 'Suco natural 300ml',
    recommended: true,
    variants: [
      { id: 'd1-1', name: '300ml', price: 10 },
      { id: 'd1-2', name: '500ml', price: 15 }
    ]
  }
]; 