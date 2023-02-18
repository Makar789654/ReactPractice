import {Route, Routes} from "react-router-dom";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SlideOne from "./pages/slideone";
import SlideTwo from "./pages/slidetwo";

import HeaderMain from "./common/header/Header";
import {Footer} from "./component/arrowComp";
import {StaticPart} from './component/StaticPart';

import './style.css'


export default function App() {
    return (
        <>
            <HeaderMain/>
            <div className="container">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/SlideOne' element={<SlideOne/>}/>
                <Route path='/SlideTwo' element={<SlideTwo/>}/>
               
            </Routes>
            <StaticPart/>
            </div>
            <Footer />
        </>

    )
}