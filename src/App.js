import React, { useEffect } from 'react'
import './App.css';
import Header from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";

function App() {
  useEffect(() => {
      document.title = "Hadn Dadn"
  }, []);

  return (
      <div id="main">
        <Header />
        <MainContent />
        <Footer />
      </div>
  );
}

export default App;
