/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Touchable, Text, ScrollView } from '../index';

import { colors } from '../../styles/theme.json';

const Tabs = ({ tabs = [], active = '', onChange = (tab) => { } }) => {
    const totalTabs = tabs?.length;
    const tabStyle = {
        borderBottomWidth: 3,
        borderColor: colors.danger,
    };

    return (
        <ScrollView horizontal style={{
            maxHeight: 70,
            backgroundColor: colors.light,
        }}>
            {tabs?.map(tab => (
                <Touchable
                    onPress={() => onChange(tab.value)}
                    key={tab.value}
                    hasPadding
                    style={[{
                        minWidth: `${100 / totalTabs}%`,
                        alignItems: 'center',
                    },
                    active === tab.value ? tabStyle : {},
                    ]}>
                    <Text color={active === tab.value ? 'primary' : undefined}>{tab.label}</Text>
                </Touchable>
            ))}

        </ScrollView>
    );
};

export default Tabs;
