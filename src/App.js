import React from 'react';
import './App.css';
import "./index.css"; // Import your custom styles for the landing page
import { useSpring, animated } from 'react-spring';

function App() {
  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  return (
    <div className="landing-page">
      <header>
        <nav>
          <div className="logo">Your Shoe Co.</div>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <animated.h1 style={heroAnimation}>Welcome to Your Shoe Co.</animated.h1>
          <animated.p style={heroAnimation}>Your one-stop shop for the latest and greatest in footwear.</animated.p>
          <button className="cta-button">Shop Now</button>
        </section>

        <section id="features" className="feature-section">
          <div className="feature">
            <h2>Quality Footwear</h2>
            <p>Experience the comfort and durability of our shoes.</p>
          </div>

          <div className="feature">
            <h2>Trendy Designs</h2>
            <p>Stay in style with our fashionable shoe collection.</p>
          </div>

          <div className="feature">
            <h2>Easy Returns</h2>
            <p>We offer hassle-free returns within 30 days of purchase.</p>
          </div>
        </section>

        <section id="products" className="product-section">
          <h2>Featured Products</h2>
          {/* Display your product cards with animations here */}
        </section>
      </main>

      <footer id="contact" className="footer-section">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to reach out to us:</p>
          <p>Email: info@yourshoeco.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
