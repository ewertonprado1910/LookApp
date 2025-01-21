import React from 'react';
import { StatusBar } from 'react-native';

import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Post/list';

import { Box, Spacer, ScrollView } from '../../components/index';

const Feed = () => {
    return (
        <>
            <StatusBar backgroundColor="#000000" />
            <Box>
                <Header />
                <ScrollView>
                    <StoryList />
                    <Spacer />
                    <PostList />
                </ScrollView>

            </Box>
        </>

    );
};

export default Feed;
