import React from 'react';
import { ScrollView } from '../../components/index';
import Product from '.';


const ProductyList = () => {
    return (
        <ScrollView fluid>
            {Array.from(Array(30))?.map(item =>
                <Product
                    cover="https://down-br.img.susercontent.com/file/71c88876c0b8617e8bbfd82559cecb60"
                    brand="Ref Simons"
                    title="Large striped cardigan "
                    price="$1080"
                />
            )}
        </ScrollView>
    );

};

export default ProductyList;
