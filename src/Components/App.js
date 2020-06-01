import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Portfolio from './Portfolio';
import { PortfolioArticles } from '../Data/portfolio-articles';
import CV from './CV';
import Contact from './Contact';
import Footer from './Footer';
import Article from './Article';

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" render={() => <Portfolio items={PortfolioArticles} />} />
        <Route path="/portfolio/:articlePath" component={Article} />
        <Route path="/cv" component={CV} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  )
};

export default App;