/* eslint-disable no-alert */
import React from 'react';
import moment from 'moment';

import { Touchable, Box, Cover, Text } from '../../components/index';
import { colors } from '../../styles/theme.json';


const Story = ({ story }) => {
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
                image={story.cover} >

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
                        image={story?.owner?.photo} />

                    <Box justify="flex-end">
                        <Text color="light">{story?.owner?.username}</Text>
                        <Text color="light" variant="small">
                            {moment(story?.createdAt).fromNow()}
                        </Text>
                    </Box>
                </Box>

            </Cover>
        </Touchable>



    );
};

export default Story;
