import React from "react";
import Weather from "../components/Cards";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Header />
        <Hero />
        <Weather />
        <Footer />
        </>
    )
}

export default Home