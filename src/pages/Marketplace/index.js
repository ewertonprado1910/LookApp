/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import CategoryList from '../../components/Category/list';
import {Touchable } from '../../components/index';

const Marketplace = () => {
    return (
        <>
            <Header title="Categories"
                rigth={() =>
                    <Touchable hasPadding width="80px" onPress={() => alert('teste')} >
                        <Icon name="bag" size={20} />
                    </Touchable>}
            />
            <CategoryList/>
        </>
    );
};
export default Marketplace;
