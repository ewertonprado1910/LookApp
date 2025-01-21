import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { colors } from '../../styles/theme.json';
import { Box, Text, Touchable, Cover } from '../../components/index';

const Post = () => {
    return (
        <Box fluid hasPadding>
            <Box row align="center">
                <Cover
                    image="https://conteudo.imguol.com.br/c/entretenimento/ac/2024/01/10/apostas-para-a-moda-2024-tweed-1704914443770_v2_450x600.jpg.webp"
                    width="40px"
                    height="40px"
                    circle="100%" />

                <Box spacing="0px 0px 0px 10px">
                    <Text bold color="dark">_Vivian</Text>
                    <Text variant="small">3 mins a go</Text>
                </Box>
                <Touchable width="50px" height="30px" align="flex-end">
                    <Icon name="options" size={15} color={`${colors.muted}`} />
                </Touchable>
            </Box>
            <Cover
                image="https://i.ytimg.com/vi/fHn1-cK4ylc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVh_fM2Q_0cHv5k1mgPbhVW6dO-A"
                width="100%"
                height="190px"
                radius="10px"
                spacing="10px 0px"
            />
            <Box row fluid align="center">
                <Box row fluid align="center">
                    {Array.from(Array(3))?.map(item =>
                        <Cover
                            circle
                            image="https://i.ytimg.com/vi/fHn1-cK4ylc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVh_fM2Q_0cHv5k1mgPbhVW6dO-A"
                            width="30px"
                            height="30px"
                            border={`1px solid ${colors.light}`}
                            spacing="0px -15px 0px 0px"
                        />)}
                    <Text
                        spacing="0px 20px"
                        variant="small">
                        Liked by 10,098
                    </Text>
                </Box>
                <Box row justify="flex-end">

                    <Touchable width="24px" spacing="0px 10px 0px 0px">
                        <Icon name="heart" size={24} color={colors.danger} />
                    </Touchable>

                    <Touchable width="24px" spacing="0px 10px 0px 0px">
                        <Icon name="bubble" size={24} color={colors.muted} />
                    </Touchable>

                    <Touchable width="24px">
                        <Icon name="share" size={24} color={colors.muted} />
                    </Touchable>

                </Box>
            </Box>
            <Text
                color="dark" variant="small">
                Interview: Shoe Designer John Fluevog On New Book, Spirituality And ‘Slow Fashion’
            </Text>
        </Box>

    );
};

export default Post;
