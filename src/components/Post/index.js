import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';

import { colors } from '../../styles/theme.json';
import { Box, Text, Touchable, Cover } from '../../components/index';

const Post = ({ post }) => {
    return (
        <Box fluid hasPadding>
            <Box row align="center">
                <Cover
                    image={post?.owner?.photo}
                    width="40px"
                    height="40px"
                    circle="100%" />

                <Box spacing="0px 0px 0px 10px">
                    <Text bold color="dark">{post?.owner?.username}</Text>
                    <Text variant="small"> {moment(post?.createdAt).fromNow()}</Text>
                </Box>
                <Touchable width="50px" height="30px" align="flex-end">
                    <Icon name="options" size={15} color={`${colors.muted}`} />
                </Touchable>
            </Box>
            <Cover
                image={post.cover}
                width="100%"
                height="190px"
                radius="10px"
                spacing="10px 0px"
            />
            <Box row fluid align="center">
                <Box row fluid align="center">
                    {post?.likeInfos?.photos.map(photo =>
                        <Cover
                            circle
                            image={photo}
                            width="30px"
                            height="30px"
                            border={`1px solid ${colors.light}`}
                            spacing="0px -15px 0px 0px"
                        />)}
                    <Text
                        spacing="0px 20px"
                        variant="small">
                        {post?.likeInfos?.description}
                    </Text>
                </Box>
                <Box row justify="flex-end">

                    <Touchable width="24px" spacing="0px 10px 0px 0px">
                        <Icon name="heart" size={24}
                            color={colors[post?.isLiked ? 'danger' : 'muted']} />
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
                {post?.description}
            </Text>
        </Box>

    );
};

export default Post;
