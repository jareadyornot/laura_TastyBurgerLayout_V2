import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ImageSlider } from './components/ImageSlider';
import { BurgerMenu } from './components/BurgerMenu';
import './App.css';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (burger: { id: number; name: string; price: string; imageUrl: string }, quantity: number) => {
    const numericPrice = parseFloat(burger.price.replace('$', ''));
    
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === burger.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, {
          id: burger.id,
          name: burger.name,
          price: numericPrice,
          quantity: quantity,
          imageUrl: burger.imageUrl,
        }];
      }
    });
  };

  // Count the number of unique burger types in the cart instead of total quantity
  const uniqueCartCount = cartItems.length;

  return (
    <div className="app">
      <Navbar cartCount={uniqueCartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main id="home" className="home">
        <ImageSlider />
        <section className="site-introduction" aria-labelledby="site-introduction-title">
          <h1 id="site-introduction-title">Welcome to Tasty Burger</h1>
          <p>
            Tasty Burger is all about bringing people together over the classic burger.
            Explore our mouthwatering favorites, discover your next craving, and enjoy
            a delicious bite made for burger lovers.
          </p>
        </section>
        <BurgerMenu onAddToCart={handleAddToCart} />
      </main>

      {/* Cart Modal / Drawer */}
      {isCartOpen && (
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content cart-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsCartOpen(false)}>&times;</button>
            <div className="cart-header">
              <h2>Your Tasty Cart</h2>
            </div>
            
            <div className="cart-items-list">
              {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is currently empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div className="cart-item-row" key={item.id}>
                    <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <span className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total-row">
                  <span>Total:</span>
                  <span className="cart-total-price">
                    ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <button className="modal-add-button" onClick={() => alert('Proceeding to checkout!')}>
                  Checkout Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;