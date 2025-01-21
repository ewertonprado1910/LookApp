import React from 'react';
import { ScrollView } from '../../components/index';
import Category from '.';


const CategoryList = () => {
    return (
        <ScrollView fluid style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
        }}>
            {Array.from(Array(30))?.map(item =>
                    <Category />
                )}
        </ScrollView>
    );

};

export default CategoryList;
