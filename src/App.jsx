import {Route, Routes} from 'react-router-dom'


import {Header} from "src/core";
import {lazy} from "react";
import './styles/common.scss'
import './styles/reset.scss'
import {LazyLoadWrapper} from "./core/lib/lazyLoadWrapper";

const Home = lazy(() => import('pages/Home/Home'))
const Shows = lazy(() => import('pages/Shows/ui/Shows'))
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'))
const SingleShow = lazy(() => import('pages/SingleShow/ui/SingleShow'))
const SingleShowInfo = lazy(() => import('pages/SingleShowInfo/ui/SIngleShowInfo'))
const People = lazy(() => import('pages/People/ui/People'))
const SearchPage = lazy(() => import('pages/SearchPage/ui/SearchPage'))

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Routes>
                    <Route index={true} element={LazyLoadWrapper(<Home/>)}/>
                    <Route path='search' element={LazyLoadWrapper(<SearchPage/>)}/>
                    <Route path='shows/:page' element={LazyLoadWrapper(<Shows/>)}/>
                    <Route path='shows/:page/:id/:name' element={LazyLoadWrapper(<SingleShow/>)}>
                        <Route path=':info' element={LazyLoadWrapper(<SingleShowInfo/>)}/>
                    </Route>
                    <Route path="people/:page" element={LazyLoadWrapper(<People/>)}/>
                    <Route path='*' element={LazyLoadWrapper(<PageNotFound/>)}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;