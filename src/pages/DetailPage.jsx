import React from 'react'
import { Header } from '../components/Header'
import MobileNav from '../components/MobileNav'
import LatestProducts from '../components/LatestProducts'
import BestSelling from '../components/BestSelling'
import Footer from '../components/Footer'
import RelatedProducts from '../components/RelatedProducts'
import Details from '../components/Details'

const DetailPage = () => {
    return (
        <div>
            <Header />
            <MobileNav />
            <Details />
            <RelatedProducts />
            <LatestProducts />
            <BestSelling />
            <Footer />
        </div>
    )
}

export default DetailPage