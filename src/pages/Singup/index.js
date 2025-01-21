import React from 'react';
import { StatusBar } from 'react-native';
import { Box, Text, Title, Spacer, Button, Input } from '../../components/index';


const SignUp = ({navigation: {navigate}}) => {

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

                <Input placeholder="Name" />
                <Spacer size="20px" />

                <Input placeholder="Email" />
                <Spacer size="20px" />

                <Input placeholder="Password" secureTextEntry />
                <Spacer size="60px" />

                <Button
                    block
                    onPress={() => navigate('Feed')}>
                    <Text >
                        Create new account
                    </Text>
                </Button>
                <Spacer />
                <Text color="gray50"
                    underline
                    onPress={() => navigate('Home')}
                >
                    Back to home
                </Text>
            </Box>
        </>

    );

};

export default SignUp;
