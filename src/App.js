import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">Company name</div>
        <ul>
          <li>Features</li>
          <li>Enterprise</li>
          <li>Support</li>
          <li>Pricing</li>
          <li className="btn">Sign Up</li>
        </ul>
      </div>

      <div className="center">
        <h1>Pricing</h1>
        <p>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <div className="title">Free</div>
          <div className="price">
            <span>$0</span> /mo
          </div>
          <p>
            10 users included 2 GB of storage Email support Help center access
          </p>
          <button className="btn">Sign up for free</button>
        </div>
        <div className="card">
          <div className="title">Pro</div>
          <div className="price">
            <span>$15</span> /mo
          </div>
          <p>
            10 users included 2 GB of storage Email support Help center access
          </p>
          <button className="btn blue">Sign up for free</button>
        </div>
        <div className="card">
          <div className="title">Enterprise</div>
          <div className="price">
            <span>$29</span> /mo
          </div>
          <p>
            10 users included 2 GB of storage Email support Help center access
          </p>
          <button className="btn blue">Sign up for free</button>
        </div>
      </div>

      <div className="footer">
        <ul className="column">
          <h3>Features</h3>
          <li>Cool stuff</li>
          <li>Random feature</li>
          <li>Team feature</li>
          <li>Stuff for developers</li>
          <li>Another one</li>
          <li>Last time</li>
        </ul>
        <ul className="column">
          <h3>Resources</h3>
          <li>Resource</li>
          <li>Resource name</li>
          <li>Another resource</li>
          <li>Final resource</li>
          
        </ul>
        <ul className="column">
          <h3>About</h3>
          <li>Team</li>
          <li>Locations</li>
          <li>Privacy</li>
          <li>Terms</li>
         
        </ul>
      </div>
    </div>
  );
}

export default App;
