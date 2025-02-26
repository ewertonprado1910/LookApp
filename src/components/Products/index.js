/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Box, Text, Touchable, Cover, Spacer } from '../index';

import { AppContext } from '../../contexts/app';

const Product = ({ product, selected = false }) => {
    const { removeFromCart } = useContext(AppContext);
    const { navigate } = useNavigation();
    return (
        <Touchable
            onPress={() => {
                if (!selected) {
                    navigate('Product', { product });
                } else {
                    Alert.alert(
                        'Esta certo disso?',
                        'Deseja remover este item do carrinho?',
                        [
                            { text: 'Cancel', style: 'cancel' },
                            {
                                text: 'Remove',
                                style: 'destructive',
                                onPress: () => removeFromCart(product?.id),
                            },
                        ]
                    );

                }
            }}
            row
            hasPadding={!selected}
            background="light"
            spacing={selected ? '10px 0' : '0px 0px 1px 0'} >
            <Cover
                width="80px"
                heigth="80px"
                image={product?.cover} />
            <Box background="light" hasPadding style={{ paddingTop: 0, paddingBottom: 15 }}>
                {!selected && <Text color="dark">{product?.brand}</Text>}
                <Text bold color="dark">{product?.title}</Text>
                <Spacer />

                {selected && (
                    <Box>
                        <Text color="dark">Size: {product?.size}</Text>
                    </Box>)}

                <Box row width="100%" justify="space-between">
                    <Text color="dark">{product?.price}</Text>
                    <Text color="danger">{selected ? 'Remove' : 'Add to cart'}</Text>
                </Box>

            </Box>
        </Touchable >
    );
};
export default Product;
