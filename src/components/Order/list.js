import React from 'react';
import { ScrollView } from '../../components/index';
import Order from '.';


const OrderyList = ({orders}) => {
    return (
        <ScrollView fluid background="light" hasPadding>
            {orders?.map(order =>
                <Order order={order}/>
            )}
        </ScrollView>
    );

};

export default OrderyList;
