import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import AllProduct from './AllProduct';
import Sell from './Sell';
import Login from './Login';
import SignUp from './SignUp';
import WishList from './WishList';
import ProductDetail from './ProductDetail';
import CustomerDetails from './CustomerDetails';
function App() {
    useEffect(() => {
        document.title = "Jagran Hub"
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allproduct" element={<AllProduct />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route exact path="/wishlist" element={<WishList />} />
                <Route exact path="/mydetails" element={<CustomerDetails/>} />
                <Route exact path="/product" element={<ProductDetail/>} />
            </Routes>

        </BrowserRouter>
    );
    // return (
    //     <div id="box">
    //         <Header />
    //         <Feature />
    //         <Grid />
    //         <Footer />
    //     </div>
    // )
}
export default App;