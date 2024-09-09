

function App() {
 
  return (
   <div className="app">
    <section id="content">
      <header>
        <div>
          <h1>Shop Mart</h1>

          <div>
            <button className="icon-button">
              <span>&#128722;</span></button>
              <span className="badge">3</span>
            <button className="icon-button">
            <span className="badge">3</span>
              <span>&#129293;</span></button>
          </div>
        </div>

<div>
  <nav>

    <button>Home</button>
    <button>Catalog</button>
    <button>All products</button>
    <button>Wishlist</button>
  

  </nav>

    </div>

      </header>

      <main>
        <div className="product">

          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg"></img>
          <p className="pr-name">Awesome Shoes</p>
          <p className="pr-price">$25</p>
        </div>

        <div className="product">

<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg"></img>
<p className="pr-name">Awesome Shirt</p>
<p className="pr-price">$35</p>
</div>

<div className="product">

<img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Windbreaker_Jacket%2C_Hood_Outside.jpg"></img>
<p className="pr-name">Awesome Jacket</p>
<p className="pr-price">$25</p>
</div>


<div className="product">

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg"></img>
<p className="pr-name">Awesome Jeans</p>
<p className="pr-price">$25</p>
</div>



<div className="product">

<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Men%27s_Shorts_-_Old_Bull_Lee_-_Orange.jpg"></img>
<p className="pr-name">Awesome Shorts</p>
<p className="pr-price">$25</p>
</div>

<div className="product">

<img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Tank-top_inspired_by_Adriaen_Coenen%27s_Visboeck.png"></img>
<p className="pr-name">Awesome Tanktop</p>
<p className="pr-price">$25</p>
</div>

      </main>
    </section>
    <footer>
    <div>
      <h3>Our policies</h3>
      <ul>
        <li><a href="">Return policies</a></li>
        <li><a href="">Shipping policy</a></li>
        <li><a href="">Terms of service</a></li>
      </ul>
    </div>

    <div>
      <h3>Who we are</h3>
      <ul>
        <li><a href="">About us</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Sell with us</a></li>
      </ul>
    </div>

    <div>
      <h3>Our productse</h3>
      <ul>
        <li><a href="">Home pages</a></li>
        <li><a href="">Search</a></li>
        <li><a href="">Catalog</a></li>
      </ul>
    </div>
    </footer>

   </div>
  );
}

export default App
