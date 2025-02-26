import React from 'react';
import { ScrollView } from '../../components/index';
import Product from '.';


const ProductyList = ({ products }) => {
    return (
        <ScrollView fluid>
            {products.map(product =>
                <Product
                    product={product} />
            )}
        </ScrollView>
    );

};

export default ProductyList;
