import React from 'react';

import { Touchable, Box, Cover, Text } from '../../components/index';
import { colors } from '../../styles/theme.json';


const Story = () => {
    return (
        <Touchable
            onPress={() => alert('teste')}
            background="black"
            radius="15px"
            height="190px"
            spacing="0px 8px 0px"
            width="150px">

            <Cover
                width="100%"
                height="100%"
                image="https://www.kacewear.com.br/cdn/shop/articles/Capa_-_A_Ascensao_do_Streetwear_Feminino_na_Moda.png?v=1663346348" >

                <Box
                    fluid
                    hasPadding
                    background={`${colors.dark}70`}
                    justify="space-betwenn">

                    <Cover
                        width="40px"
                        height="40px"
                        circle="100%"
                        border={`1px solid ${colors.light}`}
                        image="https://molde.me/wp-content/uploads/2023/12/632073fa475177a485b7a371_Semana20de20moda20202.png" />

                    <Box justify="flex-end">
                        <Text color="light">Ewerton_</Text>
                        <Text color="light" variant="small">2 mins a go</Text>
                    </Box>
                </Box>

            </Cover>
        </Touchable>



    );
};

export default Story;
