import React from 'react';
import { Product,
    HeroBanner,
    FooterBanner} from '../components';


const Home = () => {
    return (
        <>
            <HeroBanner />

            <div>
                <h2 className="products-heading">Best Selling Products</h2>
                <p>Speakers of many variations</p>
            </div>

            <div className="products-container">
                {['product1', 'product2'].map(
                    ( product ) => product)}
            </div>

            <FooterBanner />
        </>
    );
}

export default Home;
