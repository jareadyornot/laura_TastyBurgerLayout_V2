import './Navbar.css';

export const Navbar = () => {
  const logoImageUrl = "https://imgs.search.brave.com/7xBvJX-VuKZdOqc59WFz6u6B0bclKcqKD6MTplkSj98/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG41/LnZlY3RvcnN0b2Nr/LmNvbS9pL3RodW1i/cy84My80OS9idXJn/ZXItdmVyeS10YXN0/eS1sb2dvLWVtYmxl/bS1pY29uLXZlY3Rv/ci0yNTQ5ODM0OS5qcGc";

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