import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom'
import '../src/styles/reset.scss'
import '../src/styles/common.scss'
import Home from "./pages/Home/Home";
import Shows from "./pages/Shows/Shows";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SingleShow from "./pages/SingleShow/SingleShow";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shows/:page' element={<Shows />} />
          <Route path='/shows/:page/:id/:name' element={<SingleShow />} />
          <Route path='/shows/:page/:id/:name/:info' element={<SingleShow />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
