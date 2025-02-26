/* eslint-disable no-alert */
import React, { useState, useContext } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles/theme.json';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Box, Text, Title, Spacer, Button, Input } from '../../components/index';

import { AppContext } from '../../contexts/app';

const Signin = ({ navigation: { navigate, replace } }) => {
    const { setUser: setUserContext } = useContext(AppContext);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const requestLogin = async () => {
        try {
            if (user.email?.length === 0 || user.password?.length === 0) {
                alert('Fill all fields');
                return false;
            }

            const response = await api.get('/users', {
                params: {
                    email: user.email.toLowerCase(),
                    password: user.password,
                },
            });

            const [loggedUser] = response.data;
            if (!loggedUser) {
                alert('User not found');
                return false;
            }

            await AsyncStorage.setItem('@user', JSON.stringify(loggedUser));

            setUserContext(loggedUser);

            replace('Feed');

        } catch (err) {
            console.error('Erro na requisição:', err.message, err);
            alert('Erro ao conectar com o servidor: ' + err.message);
        }
    };


    return (
        <>
            <StatusBar backgroundColor="#000000" />
            <Box background="light" justify="center" align="center" hasPadding>

                <Icon name="star" size={50} color={`${colors.black}`} />
                <Spacer />
                <Title bold variant="big" align="center" >
                    LOOKAPPP
                </Title>
                <Spacer size="15px" />

                <Title >Signin my account.</Title>
                <Spacer size="60px" />

                <Input placeholder="Email"
                    value={user.email}
                    onChangeText={(email) =>
                        setUser({
                            ...user, email,
                        })
                    } />
                <Spacer size="20px" />

                <Input placeholder="Password" secureTextEntry
                    value={user.password}
                    onChangeText={(password) =>
                        setUser({ ...user, password })
                    } />
                <Spacer size="60px" />

                <Button block onPress={() => requestLogin()} >
                    <Text>
                        Signin my account
                    </Text>
                </Button>
                <Spacer />
                <Text
                    color="gray50"
                    underline
                    onPress={() => navigate('SignUp')}
                >Create new account</Text>
            </Box>
        </>

    );

};

export default Signin;
