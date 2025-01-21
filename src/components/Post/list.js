import React from 'react';

import Post from '.';

import { Box, Text } from '../../components/index';

const PostList = () => {
    return (
        <Box>
            {Array.from(Array(20))?.map(item =>
                <Text>
                    <Post/>
                </Text>
            )}
        </Box>


    );

};

export default PostList;
