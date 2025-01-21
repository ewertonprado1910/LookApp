import React from 'react';
import { ScrollView } from '../../components/index';
import Order from '.';


const OrderyList = () => {
    return (
        <ScrollView fluid background="light" hasPadding>
            {Array.from(Array(3))?.map(item =>
                <Order

                />
            )}
        </ScrollView>
    );

};

export default OrderyList;
