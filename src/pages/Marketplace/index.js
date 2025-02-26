/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Empty from '../../components/Empty';
import CategoryList from '../../components/Category/list';
import { Touchable, Text } from '../../components/index';
import api from '../../services/api';

const Marketplace = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        try {
            setLoading(true);
            setTimeout(async () => {
                const { data: categoryData } = await api.get('/categories');
                setCategories(categoryData);
                setLoading(false);
            }, 100 * 2);

        } catch (err) {
            setLoading(false);
            alert(err.message);

        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCategory();
        });
        return unsubscribe;
    }, [navigation]);


    return (
        <>
            <Header title="Categories"
                rigth={() =>
                    <Touchable hasPadding width="80px" onPress={() => navigation.navigate('Cart')} >
                        <Icon name="bag" size={20} />
                    </Touchable>}
            />
            {loading && <Empty loading />}
            {!loading && <CategoryList categories={categories} />}
        </>
    );
};
export default Marketplace;
