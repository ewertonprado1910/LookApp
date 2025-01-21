/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Box, Spacer, Text, Title } from '../index';
import { colors } from '../../styles/theme.json';
import util from '../../util';

const Order = () => {
    return (
        <Box radius="5px" spacing="0px 0px 10px 0px" border={`1px solid ${util.toAlpha(colors.muted, 50)}`}>
            <Box hasPadding row width="100%" justify="space-between"
                style={{
                    borderBottomWidth: 1,
                    borderColor: util.toAlpha(colors.muted, 50),
                }}>
                <Box row align="center">
                    <Icon name="check" size={20} color={colors.success} />
                    <Text color="success" spacing="0px 0px 0px 5px">Delivered</Text>
                </Box>
                <Text variant="small" spacing="5px 0px 0px 0px">May 13, 2016 5:08 PM</Text>

            </Box>
            <Box hasPadding width="100%"
                style={{
                    borderBottomWidth: 1,
                    borderColor: util.toAlpha(colors.muted, 50),
                }}>
                <Title>Order №1947034</Title>
                <Spacer />
                <Text>Tracking number: <Text color="danger">IW3475453455</Text></Text>
            </Box>
            <Box hasPadding
                row
                width="100%"
                justify="space-between"
            >
                <Text>Value of items <Text color="dark">66,58</Text></Text>
                <Text spacing="0px 0px 0px 15px">Quantity <Text color="dark">8</Text></Text>
            </Box>
        </Box>

    );
};

export default Order;
