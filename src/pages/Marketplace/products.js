/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { StretchyScrollView } from 'react-native-stretchy';

import Header from '../../components/Header';
import Picker from '../../components/Picker';
import { AppContext } from '../../contexts/app';
import { Touchable, Text, Box, Title, Spacer, Button } from '../../components/index';

import util from '../../util';
import { colors } from '../../styles/theme.json';

const Product = ({ navigation, route }) => {
    const { cart, addToCart } = useContext(AppContext);
    const { product } = route?.params;
    const [size, setSize] = useState(null);

    useEffect(() => {
        setSize(product?.sizes?.[0]?.value);
    }, [product]);

    return (
        <>
            <Header goBack title={product?.title} rigth={() =>
                <Touchable hasPadding width="60px"
                    onPress={() => navigation.navigate('Cart')} >
                    <Icon name="bag" size={20} />
                </Touchable>} />

            <StretchyScrollView
                image={{
                    uri: product?.cover,
                }}
                imageOverlay={
                    <Box background={util.toAlpha(colors.dark, 50)} />
                }
                foreground={
                    <Box hasPadding justify="flex-end" >
                        <Title color="light" variant="big">${product?.price}</Title>
                    </Box>
                }>
                <Box hasPadding background="light">
                    <Text color="black">{product?.type}</Text>
                    <Spacer size="20px" />
                    <Title color="black">{product?.title}</Title>
                    <Spacer />
                    <Text color="dark">{product?.description}
                    </Text>
                    <Spacer size="40px" />
                    <Picker
                        title="Size"
                        options={product?.sizes}
                        initialValue={product?.sizes?.[0]?.value}
                        onChange={value => setSize(value)}
                    />
                    <Spacer size="40px" />
                    <Button block
                        onPress={() => {
                            addToCart({ ...product, size });
                            navigation.navigate('Cart');
                        }}>
                        <Text color="light">Add to cart</Text>
                    </Button>
                </Box>

            </StretchyScrollView>
        </>
    );
};

export default Product;
