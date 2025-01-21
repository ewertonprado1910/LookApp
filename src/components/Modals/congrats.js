/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Box, Spacer, Text, Title, Cover } from '../index';
import { Button } from '../index';

const CongratsModal = () => {
    return (
        <Box background="light"
            hasPadding
            justify="center"
            align="center"
            style={{
                position: 'absolute',
                zIndex: 9999,
                width: '100%',
                height: '100%',
            }}>
            <Cover width="200px"
                height="200px"
                source={require('../../assets/check-circle.png')}
                background="transparent"
            />
            <Spacer size="50px" />
            <Title>Congratulations!</Title>
            <Text align="center" spacing="10px">Your items are on the way
                and should arrive shortly
            </Text>
            <Spacer size="50px" />
            <Button block onPress={() => { }}>
                <Text>Track your order</Text>
            </Button>
        </Box>
    );
};

export default CongratsModal;
