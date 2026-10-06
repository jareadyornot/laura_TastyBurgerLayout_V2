import { useState } from 'react';
import './BurgerMenu.css';

interface Burger {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface BurgerMenuProps {
  onAddToCart: (burger: Burger, quantity: number) => void;
}

const allBurgers: Burger[] = [
  {
    id: 1,
    name: 'Classic Tasty Burger',
    description: 'Juicy beef patty with melted cheddar, crisp lettuce, and our signature sauce.',
    price: '$8.99',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Bacon Blaze Burger',
    description: 'Smoky bacon, pepper jack cheese, jalapeños, and spicy chipotle mayo.',
    price: '$10.49',
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Double Trouble',
    description: 'Two smashed beef patties, double American cheese, pickles, and grilled onions.',
    price: '$12.99',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Mushroom Swiss Melt',
    description: 'Sautéed mushrooms, rich Swiss cheese, and garlic herb butter on a brioche bun.',
    price: '$9.99',
    imageUrl: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'BBQ Crunch Burger',
    description: 'Topped with crispy onion rings, cheddar cheese, and tangy sweet BBQ sauce.',
    price: '$10.99',
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Avocado Deluxe',
    description: 'Fresh sliced avocado, swiss cheese, lettuce, tomato, and cilantro lime ranch.',
    price: '$11.49',
    imageUrl: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'The Crispy Chicken',
    description: 'Golden fried chicken breast, pickles, shredded lettuce, and creamy mayo.',
    price: '$9.49',
    imageUrl: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Spicy Firebird',
    description: 'Crispy chicken dipped in Nashville hot sauce with coleslaw and pickles.',
    price: '$9.99',
    imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    name: 'The Big Boss Tower',
    description: 'Three beef patties, triple cheese, bacon rashers, fried egg, and special sauce.',
    price: '$15.99',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    name: 'Veggie Garden Burger',
    description: 'Black bean and quinoa patty, vegan cheese, fresh greens, and tomato relish.',
    price: '$9.49',
    imageUrl: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80',
  },
];

export const BurgerMenu = ({ onAddToCart }: BurgerMenuProps) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);
  const [quantity, setQuantity] = useState(1);

  const displayedBurgers = showAll ? allBurgers : allBurgers.slice(0, 8);

  const handleOpenModal = (burger: Burger) => {
    setSelectedBurger(burger);
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setSelectedBurger(null);
  };

  const handleConfirmAddToCart = () => {
    if (selectedBurger) {
      onAddToCart(selectedBurger, quantity);
      handleCloseModal();
    }
  };

  return (
    <section className="burger-menu-section" id="menu">
      <div className="menu-header">
        <h2>Our Mouthwatering Burgers</h2>
        <p>Explore our lineup of handcrafted favorites made fresh to order.</p>
      </div>

      <div className="burger-grid">
        {displayedBurgers.map((burger) => (
          <div className="burger-card" key={burger.id}>
            <div className="burger-image-container">
              <img src={burger.imageUrl} alt={burger.name} className="burger-image" />
            </div>
            <div className="burger-info">
              <div className="burger-title-row">
                <h3>{burger.name}</h3>
                <span className="burger-price">{burger.price}</span>
              </div>
              <p className="burger-desc">{burger.description}</p>
              <button 
                className="details-button" 
                type="button" 
                onClick={() => handleOpenModal(burger)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-action-container">
        <button 
          className="view-all-button" 
          type="button" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All Burgers'}
        </button>
      </div>

      {selectedBurger && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            <div className="modal-image-container">
              <img src={selectedBurger.imageUrl} alt={selectedBurger.name} className="modal-image" />
            </div>
            <div className="modal-details">
              <div className="modal-header-row">
                <h2>{selectedBurger.name}</h2>
                <span className="modal-price">{selectedBurger.price}</span>
              </div>
              <p className="modal-desc">{selectedBurger.description}</p>

              <div className="modal-quantity-row">
                <label htmlFor="quantity-input">Quantity:</label>
                <input 
                  id="quantity-input"
                  type="number" 
                  min="1" 
                  max="99" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                />
              </div>

              <button className="modal-add-button" type="button" onClick={handleConfirmAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};