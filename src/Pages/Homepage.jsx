import React from 'react';
import Header from '../Components/Header';
import Heropage from '../Components/Heropage';
import Banner from '../Components/Banner';
import Bestproducts from '../Components/Bestproducts';
import Trendingproducts from '../Components/Trendingproducts';
import Reviewpage from '../Components/Reviewpage';
import FeaturedBrands from '../Components/FeaturedBrands';
import VegShop from '../Components/VegShop';

function Homepage() {
  return (
    <div>
        <Heropage />
        <Banner />
        <Bestproducts />
        <VegShop />
        <Trendingproducts />
        <Reviewpage />
        {/* <FeaturedBrands /> */}
    </div>
  )
}

export default Homepage