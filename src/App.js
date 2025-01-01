import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Website</h1>
        <p>This is a basic React website for testing and learning!</p>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>This is a sample React app built to test deployment and showcase frontend skills.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Built with React</li>
            <li>Responsive Design</li>
            <li>Deployed with Netlify</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My React Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


