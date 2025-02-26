/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors } from '../../styles/theme.json';
import { Text, Box, Title, Button, Spacer } from '../../components/index';
import { AppContext } from '../../contexts/app';

const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(AppContext);

    const checkLogged = async () => {
        AsyncStorage.clear();
        setLoading(true);

        const loggedUser = await AsyncStorage.getItem('@user');
        if (loggedUser) {
            setUser(JSON.parse(loggedUser));
            navigation.replace('Feed');
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkLogged();
    }, []);

    return (
        <>
            <StatusBar backgroundColor="#130F40" />
            <Box hasPadding align="center" background="dark">
                <Box justify="center" align="center">
                    <Icon name="star" size={50} color={`${colors.light}`} />
                    <Spacer />
                    <Spacer />
                    <Title align="center" color="light" variant="big" bold>
                        LOOKAPPP
                    </Title>
                    <Text color="light" align="center">Stay on top of the fashion world and buy your favorite looks.</Text>
                    <Spacer />
                    {loading && <>
                        <Spacer size="40px" />
                        <ActivityIndicator size="large" />
                    </>}
                </Box>



                {!loading && (<Box align="center" justify="flex-end" fluid>
                    <Button block >
                        <Text color="light"
                            onPress={() => navigation.navigate('Signin')}
                        >SigIn my account</Text>
                    </Button>
                    <Spacer size="25px" />
                    <Text color="light"
                        underline
                        onPress={() => navigation.navigate('SignUp')}>
                        Create new account
                    </Text>
                </Box>
                )}
            </Box>
        </>
    );
};

export default Home;
