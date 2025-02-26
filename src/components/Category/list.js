/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from '../../components/index';
import Category from '.';


const CategoryList = ({categories}) => {
    return (
        <ScrollView fluid style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
        }}>
            {categories.map(category =>
                <Category category={category} />
            )}
        </ScrollView>
    );

};

export default CategoryList;
