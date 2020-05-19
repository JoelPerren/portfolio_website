import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import CV from './CV';
import Contact from './Contact';
import Footer from './Footer';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/cv" component={CV} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  </BrowserRouter>
)

export default App;