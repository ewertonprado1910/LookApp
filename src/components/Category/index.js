
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Touchable, Cover, Title, Text, Spacer, Box } from '../index';
import util from '../../util';
import { colors } from '../../styles/theme.json';

const Category = () => {
    const { navigate } = useNavigation();
    return (
        <Touchable
        onPress={() => navigate('Category')}
            width="100%"
            height="180px"
            radius="10px"
            spacing="10px 0px" >
            <Cover
                width="100%"
                height="100%"
                image="https://i.customizando.net/wp-content/uploads/2023/01/tendencia-moda-feminina-2023.jpg" >
                <Box
                    width="100%"
                    justify="center"
                    align="center"
                    background={util.toAlpha(colors.black, 60)}>
                    <Title color="light" >Womam </Title>
                    <Spacer />
                    <Text>3512 ITEMS</Text>
                </Box>
            </Cover>
        </Touchable>


    );
};

export default Category;
