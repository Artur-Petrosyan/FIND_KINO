import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom'
import '../src/styles/reset.scss'
import '../src/styles/common.scss'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

    </div>
  );
}

export default App;
