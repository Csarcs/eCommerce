import React from 'react';
import {client} from '../lib/client';
import { Helmet } from 'react-helmet';

import { Product, FooterBanner, HeroBanner } from '../components';

const index = ({products, bannerD}) => {
  return (
    <>
      <Helmet>
        <title>CesarCapital+</title>
      </Helmet>

<HeroBanner heroBanner={bannerD.length && bannerD[1]}  />
  


<div className="products-heading">
  <h2> Products on Sale </h2>
  <p>Click on the product to know more details</p>
</div>


<div className="products-container">
        {products?.map(
        (product) =>  <Product key={product._id} product={product} /> )} 
 </div>

 <FooterBanner footerBanner={bannerD && bannerD[0]} />
    
    </>
  )
}

export const getServerSideProps = async () => { 
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bquery = '*[_type == "banner"]';
  const bannerD = await client.fetch(bquery);

  return {
     props: {products, bannerD}
  } 
}

export default index
