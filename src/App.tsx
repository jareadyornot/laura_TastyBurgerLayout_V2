import { Navbar } from './components/Navbar';
import { ImageSlider } from './components/ImageSlider';
import { BurgerMenu } from './components/BurgerMenu';
import './App.css';

export function App() {
  return (
    <div className="app">
      <Navbar />
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
        <BurgerMenu />
      </main>
    </div>
  );
}

export default App;