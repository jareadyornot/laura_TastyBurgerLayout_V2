import './Navbar.css';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar = ({ cartCount, onOpenCart }: NavbarProps) => {
  const logoImageUrl = "https://imgs.search.brave.com/TZc6lk4eiyO5tx9BBx-VAy2brvOx3drO58xDgU5zCsk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL3Rhc3R5LWhh/bmQtZHJhd24tYnVy/Z2VyLWZhc3QtZm9v/ZC1tb2Rlcm4tbG9n/b181MTM2NDAtMzc3/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA";
  
  return (
    <header className="navbar">
      <div className="logo-container">
        <img 
          src={logoImageUrl} 
          alt="Tasty Burger Logo" 
          className="logo-image" 
        />
        <div className="logo-text">
          <span className="logo-top">TASTY</span>
          <span className="logo-bottom">BURGER</span>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <div className="nav-right">
        <button className="cart-button" onClick={onOpenCart} type="button" aria-label="Open cart">
          <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5h2l2.2 9.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="10" cy="18" r="1.4" fill="currentColor"/>
            <circle cx="17" cy="18" r="1.4" fill="currentColor"/>
          </svg>
          <span className="cart-count">{cartCount}</span>
        </button>
        <div className="profile-container">
          <span className="profile-label">Profile</span>
        </div>
      </div>
    </header>
  );
};