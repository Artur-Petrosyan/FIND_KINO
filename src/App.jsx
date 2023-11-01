import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom'
import '../src/styles/reset.scss'
import '../src/styles/common.scss'
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Products from "./pages/Products/Products";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
