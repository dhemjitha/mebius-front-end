import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const foundItem = prevCart.find(item => 
        item.product._id === product._id && 
        item.product.selectedSize === product.selectedSize
      );
      
      if (foundItem) {
        return prevCart.map(item => 
          item.product._id === product._id && 
          item.product.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, selectedSize) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.product._id === productId && 
          item.product.selectedSize === selectedSize)
      )
    );
  };

  const decreaseQuantity = (productId, selectedSize) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.product._id === productId && 
            item.product.selectedSize === selectedSize) {
          const newQuantity = item.quantity - 1;
          if (newQuantity < 1) {
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      decreaseQuantity, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 