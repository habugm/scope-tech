import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import ProductItem1 from './MobileDetails/ProductItem1';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productItem1" element={<ProductItem1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
