/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { StretchyScrollView } from 'react-native-stretchy';

import Header from '../../components/Header';
import Picker from '../../components/Picker';
import { Touchable, Text, Box, Title, Spacer, Button } from '../../components/index';

import util from '../../util';
import { colors } from '../../styles/theme.json';

const Product = () => {
    return (
        <>
            <Header goBack title="Striped" rigth={() =>
                <Touchable hasPadding width="80px" onPress={() => alert('teste')} >
                    <Icon name="bag" size={20} />
                </Touchable>} />

            <StretchyScrollView
                image={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XtzvjNfHrosCMPNr7KVBNJDJNLMnMYopyw&s',
                }}
                imageOverlay={
                    <Box background={util.toAlpha(colors.dark, 50)} />
                }
                foreground={
                    <Box hasPadding justify="flex-end" >
                        <Title color="light" variant="big">$1080</Title>
                    </Box>
                }>
                <Box hasPadding background="light">
                    <Text color="black">Shirts</Text>
                    <Spacer size="20px" />
                    <Title color="black">A.P.C. Collection Spring 2015</Title>
                    <Spacer />
                    <Text color="dark">Enjoy the beauty of italian cotton all over your body. This item will fit your body and warm you up all over and during spring. This item will fit your body and warm you up all over and during spring.
                        And over and over again, this is the text.
                    </Text>
                    <Spacer size="40px" />
                    <Picker
                        title="Size"
                        options={[
                            { label: 'P', value: 'P' },
                            { label: 'M', value: 'M' },
                            { label: 'G', value: 'G' },
                            { label: 'GG', value: 'GG' },
                        ]}
                        initialValue="M"
                        onChange={value => alert(value)}
                    />
                    <Spacer size="40px" />
                    <Button block>
                        <Text color="light">Add to cart</Text>
                    </Button>
                </Box>

            </StretchyScrollView>
        </>
    );
};

export default Product;
