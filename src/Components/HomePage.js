import "./HomePage.css";

export default function HomePage() {
    return (
      <>
        <div className="nav-bar-container">
          <h1>Order</h1>
          <div className="nav-bar">
            <a href="#drinks" className="nav-element">Drinks</a>
            <a href="#food" className="nav-element">Food</a>
            <span className="nav-bar-slider highlight-background"></span>
          </div>
        </div>
        
        <main className="et-main">
          <section className="et-slide drinks-list" id="drinks">
            <ul>
              <li>Espresso</li>
              <li>Latte</li>
              <li>Mocha</li>
            </ul>
          </section>
          <section className="et-slide food-list hide-section" id="drinks">
            <ul>
              <li>Sandviches</li>
              <li>Cakes</li>
              <li>Breakfast</li>
            </ul>
          </section>
        </main>
      </>
    );
}