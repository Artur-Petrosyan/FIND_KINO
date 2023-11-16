import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Shows from "./pages/Shows/ui/Shows";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SingleShow from "./pages/SingleShow/SingleShow";
import SingleShowInfo from "./pages/SingleShowInfo/SIngleShowInfo";

import { Routes, Route } from 'react-router-dom'

import './styles/common.scss'
import './styles/reset.scss'
import People from "./pages/People/People";
import SearchPage from "./pages/SearchPage/ui/SearchPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='shows/:page' element={<Shows />} />
          <Route path='shows/:page/:id/:name' element={<SingleShow />} >
            <Route path=':info' element={<SingleShowInfo />} />
          </Route>
          <Route path="people/:page" element={<People />} />

          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;