import './Navbar.css';

export const Navbar = () => {
  const logoImageUrl = "https://imgs.search.brave.com/TZc6lk4eiyO5tx9BBx-VAy2brvOx3drO58xDgU5zCsk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL3Rhc3R5LWhh/bmQtZHJhd24tYnVy/Z2VyLWZhc3QtZm9v/ZC1tb2Rlcm4tbG9n/b181MTM2NDAtMzc3/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA";
  return (
    <header className="navbar">
      {/* Brand Logo Container */}
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

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
      </nav>

      {/* Right Actions: Cart and Profile */}
      <div className="nav-right">
        <button className="cart-button">
          Cart (0)
        </button>
        <div className="profile-container">
          <span className="profile-label">Profile</span>
        </div>
      </div>
    </header>
  );
};