import React, { useEffect } from 'react'
import './App.css';
import { useTranslation } from "react-i18next";
import Header from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";

function App() {
  useEffect(() => {
      document.title = "Hadn Dadn"
  }, []);

  const { t } = useTranslation();
  document.title = t("document_title");  

  return (
      <div className="main">
        <Header />
        <MainContent />
        <Footer />
      </div>
  );
}

export default App;
