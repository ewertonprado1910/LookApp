/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Box, Text, Touchable, Cover, Spacer } from '../index';

const Product = ({ cover, brand, title, price, selected = false }) => {
    const { navigate } = useNavigation();
    return (
        <Touchable
            onPress={() => navigate('Product')}
            row
            hasPadding={!selected}
            background="light"
            spacing={selected ? '10px 0' : '0px 0px 1px 0'}>
            <Cover
                width="80px"
                heigth="80px"
                image={cover} />
            <Box background="light" hasPadding style={{ paddingTop: 0, paddingBottom: 15 }}>
                {!selected && <Text color="dark">{brand}</Text>}
                <Text bold color="dark">{title}</Text>
                <Spacer />

                {selected && (
                    <Box>
                        <Text color="dark">Size: GG</Text>
                    </Box>)}

                <Box row width="100%" justify="space-between">
                    <Text color="dark">{price}</Text>
                    <Text color="danger">{selected ? 'Remove' : 'Add to cart'}</Text>
                </Box>

            </Box>
        </Touchable>
    );
};
export default Product;
