import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomePage  from "./pages/home";
import Header from "./components/header";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact-us";


const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="about" element={<AboutPage />}/>
                <Route path="services" element={<ServicesPage />}/>
                <Route path="contact-us" element={<ContactPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;