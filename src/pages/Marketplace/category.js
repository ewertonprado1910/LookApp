/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../components/Header';
import { Touchable } from '../../components/index';
import ProductyList from '../../components/Products/list';
import Empty from '../../components/Empty';
import api from '../../services/api';

const Category = ({ route, navigation }) => {
    const { category } = route?.params;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            setLoading(true);
            setTimeout(async () => {
                const { data: productsData } = await api.get('/products', {
                    params: {
                        categoryId: category?.id,
                    },
                });
                setProducts(productsData);
                setLoading(false);
            }, 100 * 2);

        } catch (err) {
            setLoading(false);
            alert(err.message);

        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getProducts();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <>
            <Header title={category?.title} rigth={() =>
                <Touchable hasPadding width="80px" onPress={() => navigation.navigate('Cart')} >
                    <Icon name="bag" size={20} />
                </Touchable>} />
            {loading && <Empty loading />}
            {!loading && <ProductyList products={products} />}
        </>

    );
};
export default Category;
