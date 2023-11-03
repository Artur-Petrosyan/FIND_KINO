import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom'
import '../src/styles/reset.scss'
import '../src/styles/common.scss'
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Shows from "./pages/Shows/Shows";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='shows' element={<Shows />} />
        <Route path='shows/:id/:name' element={<SingleProduct />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
