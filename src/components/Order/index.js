/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import moment from 'moment';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Box, Spacer, Text, Title } from '../index';
import { colors } from '../../styles/theme.json';
import util from '../../util';

const Order = ({ order }) => {
    const stepEnum = {
        waiting: {
            icon: 'clock',
            color: 'warning',
        },
        delivered: {
            icon: 'check',
            color: 'success',
        },
        canceled: {
            icon: 'close',
            color: 'danger',
        },
    };

    const stepData = stepEnum[order?.step];

    return (
        <Box radius="5px" spacing="0px 0px 10px 0px" border={`1px solid ${util.toAlpha(colors.muted, 50)}`}>
            <Box hasPadding row width="100%" justify="space-between"
                style={{
                    borderBottomWidth: 1,
                    borderColor: util.toAlpha(colors.muted, 50),
                }}>
                <Box row align="center">
                    <Icon name="check" size={20} color={colors[stepData.color]} />
                    <Text color={stepData?.color} spacing="0px 0px 0px 5px">{order.step?.toUpperCase()}</Text>
                </Box>
                <Text variant="small" spacing="5px 0px 0px 0px">{moment(order?.createdAt).format('DD/MM/YYYY HH:mm')}</Text>

            </Box>
            <Box hasPadding width="100%"
                style={{
                    borderBottomWidth: 1,
                    borderColor: util.toAlpha(colors.muted, 50),
                }}>
                <Title>Order №{order?.orderNumber}</Title>
                <Spacer />
                <Text>Tracking number: <Text color="danger">{order?.trackingNumber}</Text></Text>
            </Box>
            <Box hasPadding
                row
                width="100%"
                justify="space-between"
            >
                <Text>Value of items <Text color="dark">{order?.totalValue}</Text></Text>
                <Text spacing="0px 0px 0px 15px">Quantity <Text color="dark">{order?.totalItems}</Text></Text>
            </Box>
        </Box>

    );
};

export default Order;
