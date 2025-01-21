/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../components/Header';
import { Touchable } from '../../components/index';
import ProductyList from '../../components/Products/list';

const Category = () => {
    return (
        <>
            <Header title="Categoria X" rigth={() =>
                <Touchable hasPadding width="80px" onPress={() => alert('teste')} >
                    <Icon name="bag" size={20} />
                </Touchable>} />
            <ProductyList />
        </>

    );
};
export default Category;
