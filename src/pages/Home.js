import Header from "../component/Header";
import Hero from "../component/Hero";
import Product from "../component/Product";
import Place from "../component/Place";
import Blog from "../component/Blog";
import Footer from "../component/Footer";

import React from 'react'

const Home = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <Hero />
                <Product />
                <Place />
                <Blog />
                <Footer />
            </main>
        </div>
    )
}

export default Home