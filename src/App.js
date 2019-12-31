import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (

    <>
    <header>
      <Header />
    </header>
    <main>
       <Home />
    </main>
    <footer>
      <Footer />
    </footer>
     
    </>
  );
}

export default App;
