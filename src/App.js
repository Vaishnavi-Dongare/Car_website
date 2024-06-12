// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './pages/AboutSection';
import HomeSection from './pages/HomeSection';
import FeatureSection from './pages/FeatureSection';
import ProductSection from './pages/ProductSection';
import NewsSection from './pages/NewsSection';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeSection} />
          <Route path="/about" component={AboutSection} />
          <Route path="/features" component={FeatureSection} />
          <Route path="/products" component={ProductSection} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/news" component={NewsSection} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
