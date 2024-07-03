import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './HeaderTitleStyle';

interface HeaderTitleProps {
    title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.titleText}>{title.toUpperCase()}</Text>
            <View style={styles.line} />
        </View>
    );
};

export default HeaderTitle;