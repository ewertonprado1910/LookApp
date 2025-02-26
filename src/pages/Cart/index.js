/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import moment from 'moment';

import { colors } from '../../styles/theme.json';
import { ScrollView, Spacer, Title, Box, Text, Button } from '../../components/index';


import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Product from '../../components/Products';
import PaymentForm from '../../components/Forms/payment';
import CongratsModal from '../../components/Modals/congrats';
import util from '../../util';
import { AppContext } from '../../contexts/app';
import Empty from '../../components/Empty';
import api from '../../services/api';

const Cart = () => {
    const { cart, user, dicount_porcentage, delivery, order_number } = useContext(AppContext);
    const [showCongrats, setShowCongrats] = useState(false);
    const [tab, setTab] = useState('cart');
    const [loading, setLoading] = useState(false);
    const [creditCard, setCreditCard] = useState({});

    const cartIsEmpty = cart?.length === 0;
    const orderPrice = cart?.reduce((acc, product) => {
        return (acc += product.price);
    }, 0);
    const totalDiscount = (orderPrice * dicount_porcentage).toFixed(2);
    const totalOrder = (orderPrice + delivery - totalDiscount);


    const confirmationOrder = async () => {
        try {
            setLoading(true);
            const creditCardValidator = util.isValidCreditCard(creditCard);
            if (creditCardValidator.error) {
                alert(creditCardValidator.message);
                return false;
            }

            const { data: orderData } = await api.post('/orders', {
                userId: user.id,
                step: 'waiting',
                createdAt: moment().format(),
                orderNumber: order_number,
                trackingNumber: new Date().getTime(),
                totalValue: totalOrder,
                totalItems: cart?.length,
            });

            if (!orderData.id) {
                alert('Pedido não efetuado, tente novamente mais tarde');
                setLoading(false);
                return false;
            }

            setShowCongrats(true);

        } catch (err) {
            setLoading(false);
            alert(err.message);

        }
    };


    return (
        <>
            {showCongrats && <CongratsModal />}

            <Header title="Cart" goBack />

            {cartIsEmpty && <Empty message="O carrinho esta vazio!" />}
            {!cartIsEmpty && (
                <>
                    <Tabs tabs={[
                        { label: 'Cart', value: 'cart' },
                        { label: 'Payment', value: 'payment' },
                    ]}
                        active={tab}
                        onChange={(value) => setTab(value)}
                    />
                    {!cartIsEmpty && (<ScrollView
                        hasPadding
                        background="light" >
                        <Spacer size="20px" />
                        <Title variant="small">Order number is{order_number}</Title>
                        <Spacer size="20px" />

                        {tab === 'cart' && (
                            <>
                                {cart?.map(product => (
                                    <Product product={product} selected />
                                ))}
                                <Spacer size="30px" />
                                <Box height="30px" row width="100%" justify="space-between">
                                    <Text color="black">Orders:</Text>
                                    <Text color="black">$ {orderPrice}</Text>
                                </Box>
                                <Box row height="30px" width="100%" justify="space-between">
                                    <Text color="black">Discount:</Text>
                                    <Text color="muted">$-{totalDiscount}</Text>
                                </Box>
                                <Box row height="30px" width="100%" justify="space-between">
                                    <Text color="black">Delivery:</Text>
                                    <Text color="black">$ {delivery.toFixed(2)}</Text>
                                </Box>
                                <Box background={util.toAlpha(colors.muted, 60)}
                                    row height="30px" width="100%" justify="space-between">
                                    <Text color="dark">Total order:</Text>
                                    <Text color="dark">$ {totalOrder}</Text>
                                </Box>
                                <Spacer size="30px" />
                                <Button block style={{
                                    marginBottom: 60,
                                }} >
                                    <Text color="light"
                                        onPress={() => setTab('payment')}
                                    >Place order</Text>
                                </Button>

                            </>
                        )}
                        {tab === 'payment' && (
                            <>
                                <Box row width="100%" justify="space-between"
                                    style={{
                                        borderBottomWidth: 0.5,
                                        borderBottomColor: util.toAlpha(colors.muted, 60),
                                        paddingBottom: 10,
                                    }}>
                                    <Text color="dark">Shipping address</Text>
                                    <Text color="danger">Change</Text>
                                </Box>
                                <Spacer />
                                <Text color="dark">Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495 United States</Text>

                                <Spacer size="30px" />

                                <Box row width="100%" justify="space-between"
                                    style={{
                                        borderBottomWidth: 0.5,
                                        borderBottomColor: util.toAlpha(colors.muted, 60),
                                        paddingBottom: 10,
                                    }}>
                                    <Text color="dark" >Delivery details </Text>
                                    <Text color="danger">Change</Text>
                                </Box>
                                <Spacer />
                                <Text color="dark">Standard Delivery</Text>
                                <Text color="dark">Saturday 27 - Tuesday 30</Text>
                                <Text color="dark">Cost: $10</Text>
                                <Spacer size="50px" />
                                <PaymentForm
                                    onChange={creditCardData => setCreditCard(creditCardData)} />
                                <Spacer size="30px" />

                                <Button block style={{ marginBottom: 60 }} onPress={() => confirmationOrder()} >
                                    {!loading && (<Text color="light"> Confirmation </Text>)}
                                    {loading && <ActivityIndicator />}
                                </Button>
                            </>
                        )}
                        <Spacer size="50px" />
                    </ScrollView>
                    )}
                </>
            )}
        </>

    );
};

export default Cart;
