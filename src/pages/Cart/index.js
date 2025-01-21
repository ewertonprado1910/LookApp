/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Product from '../../components/Products';
import PaymentForm from '../../components/Forms/payment';
import CongratsModal from '../../components/Modals/congrats';
import util from '../../util';
import { colors } from '../../styles/theme.json';
import { ScrollView, Spacer, Title, Box, Text, Button } from '../../components/index';

const Cart = () => {
    const [showCongrats, setShowCongrats] = useState(false);
    const [tab, setTab] = useState('payment');

    return (
        <>
            {showCongrats && <CongratsModal />}

            <Header title="Cart" goBack />
            <Tabs tabs={[
                { label: 'Cart', value: 'cart' },
                { label: 'Payment', value: 'payment' },
            ]}
                active={tab}
                onChange={(value) => setTab(value)}
            />
            <ScrollView
                hasPadding
                background="light" >
                <Spacer size="20px" />
                <Title variant="small">Orders number is 4151514</Title>
                <Spacer size="20px" />

                {tab === 'cart' && (
                    <>
                        {Array.from(Array(3))?.map(item => (
                            <Product
                                cover="https://i.customizando.net/wp-content/uploads/2023/01/tendencia-moda-feminina-2023.jpg"
                                brand="Ref Simons"
                                title="Large striped cardigan "
                                price="$1080"
                                selected
                            />
                        ))}
                        <Spacer size="30px" />
                        <Box height="30px" row width="100%" justify="space-between">
                            <Text color="black">Orders:</Text>
                            <Text color="black">450,00</Text>
                        </Box>
                        <Box row height="30px" width="100%" justify="space-between">
                            <Text color="black">Discount:</Text>
                            <Text color="black">-55,00</Text>
                        </Box>
                        <Box row height="30px" width="100%" justify="space-between">
                            <Text color="black">Delivery:</Text>
                            <Text color="black">10</Text>
                        </Box>
                        <Box background={util.toAlpha(colors.muted, 60)}
                            row height="30px" width="100%" justify="space-between">
                            <Text color="dark">Total order:</Text>
                            <Text color="dark">395,00</Text>
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
                        <PaymentForm onChange={creditCardData => console.log(creditCardData)} />
                        <Spacer size="30px" />
                        <Button block style={{
                            marginBottom: 60,
                        }} >
                            <Text color="light"
                                onPress={() => setShowCongrats(true)}
                            >Confirmation</Text>
                        </Button>
                    </>
                )}
                <Spacer size="50px" />
            </ScrollView>
        </>

    );
};

export default Cart;
