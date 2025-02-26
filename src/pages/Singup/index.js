/* eslint-disable no-alert */
import React, { useState, useContext } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import { Box, Text, Title, Spacer, Button, Input } from '../../components/index';
import { AppContext } from '../../contexts/app';

const SignUp = ({ navigation: { replace, goBack } }) => {
    const { setUser: setUserContext } = useContext(AppContext);
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const requestSignUp = async () => {
        try {
            setLoading(true);

            if (user.name?.length === 0 || user.email?.length === 0 ||
                user.password?.length === 0
            ) {
                alert('Fill all fields');
                return false;
            }

            const { data: loggedUser } = await api.post('/users', user);

            if (!loggedUser) {
                setLoading(false);
                alert('Unable to create user');
                return false;
            }

            await AsyncStorage.setItem('@user', JSON.stringify(loggedUser));

            setUserContext(loggedUser);

            replace('Feed');

        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
            <StatusBar backgroundColor="#000000" />
            <Box background="light" justify="center" align="center" hasPadding>
                <Title>
                    Create new account.
                </Title>
                <Spacer size="15px" />
                <Text >Enter your details below:</Text>
                <Spacer size="60px" />

                <Input placeholder="Name"
                    editable={!loading}
                    value={user.name}
                    onChangeText={(name) =>
                        setUser({
                            ...user, name,
                        })} />
                <Spacer size="20px" />

                <Input placeholder="Email"
                    editable={!loading}
                    value={user.email}
                    onChangeText={(email) =>
                        setUser({
                            ...user, email,
                        })} />
                <Spacer size="20px" />

                <Input placeholder="Password" secureTextEntry
                    editable={!loading}
                    value={user.password}
                    onChangeText={(password) =>
                        setUser({
                            ...user, password,
                        })} />
                <Spacer size="60px" />

                {loading && <ActivityIndicator size="large" />}
                {!loading && (<>
                    <Button
                        block
                        onPress={() => requestSignUp()}>
                        <Text >
                            Create new account
                        </Text>
                    </Button>
                    <Spacer />
                    <Text color="gray50"
                        underline
                        onPress={() => goBack('Home')}>
                        Back to home
                    </Text>
                </>
                )}
            </Box>
        </>

    );

};

export default SignUp;
