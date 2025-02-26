import React from 'react';

import Post from '.';

import { Box, Text } from '../../components/index';

const PostList = ({posts}) => {
    return (
        <Box>
            {posts.map(post =>
                <Text>
                    <Post post={post}/>
                </Text>
            )}
        </Box>


    );

};

export default PostList;
