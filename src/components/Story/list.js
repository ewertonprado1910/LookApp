import React from 'react';

import { Box, Title, Text, ScrollView } from '../../components/index';
import Story from '.';


const StoryList = () => {
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
                {Array.from(Array(20))?.map(item =>
                    <Story />
                )}
            </ScrollView>
        </Box>

    );

};

export default StoryList;
