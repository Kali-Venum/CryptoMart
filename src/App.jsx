import "./App.css";
import { Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  HomePage,
  CryptocurrenciesPage,
  CryptoDetailsPage,
  ExchangesPage,
  NewsPage,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Route path="/" element={<HomePage />} />
            <Route
              path="/cryptocurrencies"
              element={<CryptocurrenciesPage />}
            />
            <Route path="/crypto/:coinId" element={<CryptoDetailsPage />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/news" element={<NewsPage />} />
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
