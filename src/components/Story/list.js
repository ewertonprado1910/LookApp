/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Box, Text, ScrollView } from '../../components/index';
import Story from '.';


const StoryList = ({stories}) => {
    return (
        <Box fluid height="270px">
            <Box
                row
                fluid
                justify="space-between"
                hasPadding
                height="70px"
            >
                <Text bold color="dark">
                    Storiess
                </Text>
                <Text color="danger">
                    Show All
                </Text>
            </Box>
            <ScrollView horizontal
                style={{
                    paddingLeft: 20,
                }}>
                {stories?.map(story =>
                    <Story story={story} />
                )}
            </ScrollView>
        </Box>

    );

};

export default StoryList;
