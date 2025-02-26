/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Post/list';
import api from '../../services/api';
import Empty from '../../components/Empty';

import { Box, Spacer, ScrollView } from '../../components/index';

const Feed = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [feed, setFeed] = useState({
        stories: [],
        posts: [],
    });
    const getFeed = async () => {
        try {
            setLoading(true);
            setTimeout(async () => {
                const { data: feedData } = await api.get('/feed');
                setFeed(feedData);
                setLoading(false);
            }, 100 * 2);

        } catch (err) {
            setLoading(false);
            alert(err.message);

        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFeed();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <>
            <StatusBar backgroundColor="#000000" />
            <Box>
                <Header />
                {loading && <Empty loading />}
                {!loading && <ScrollView>
                    <StoryList stories={feed?.stories} />
                    <Spacer />
                    <PostList posts={feed?.posts} />
                </ScrollView>}

            </Box>
        </>

    );
};

export default Feed;
