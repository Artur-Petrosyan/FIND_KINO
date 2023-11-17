import { Routes, Route } from 'react-router-dom'

import Home from "pages/Home/Home";
import {Header} from "src/core";
import Shows from "pages/Shows/ui/Shows";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import SingleShow from "pages/SingleShow/ui/SingleShow";
import SingleShowInfo from "pages/SingleShowInfo/ui/SIngleShowInfo";
import People from "pages/People/ui/People";
import SearchPage from "pages/SearchPage/ui/SearchPage";

import './styles/common.scss'
import './styles/reset.scss'


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