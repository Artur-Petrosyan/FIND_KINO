import {lazy} from "react";
import {Route, Routes} from 'react-router-dom'
import {LazyLoadWrapperHOC} from "./core/lib/lazyLoadWrapperHOC";
import {Header} from "src/core";
import './styles/common.scss'
import './styles/reset.scss'

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
                    <Route index={true} element={LazyLoadWrapperHOC(<Home/>)}/>
                    <Route path='search' element={LazyLoadWrapperHOC(<SearchPage/>)}/>
                    <Route path='shows/:page' element={LazyLoadWrapperHOC(<Shows/>)}/>
                    <Route path='shows/:page/:id/:name' element={LazyLoadWrapperHOC(<SingleShow/>)}>
                        <Route path=':info' element={LazyLoadWrapperHOC(<SingleShowInfo/>)}/>
                    </Route>
                    <Route path="people/:page" element={LazyLoadWrapperHOC(<People/>)}/>
                    <Route path='*' element={LazyLoadWrapperHOC(<PageNotFound/>)}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;