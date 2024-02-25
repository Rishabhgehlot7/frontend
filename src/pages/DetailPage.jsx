import React from 'react'
import { Header } from '../components/Header'
import MobileNav from '../components/MobileNav'
import Poster from '../components/Poster'
import Products from '../components/Products'
import LatestProducts from '../components/LatestProducts'
import BestSelling from '../components/BestSelling'
import Footer from '../components/Footer'

const DetailPage = () => {
    return (
        <div>
            <Header />
            <MobileNav />
            <Poster />
            <Products />
            <LatestProducts />
            <BestSelling />
            <Footer />
        </div>
    )
}

export default DetailPage