import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './CategoriesStyle';

interface Category {
  name: string;
  image: any;
}

const categories: Category[] = [
  { name: 'Khaman', image: require('../assets/khaman.jpg') },
  { name: 'Samosa', image: require('../assets/samosa.jpg') },
  { name: 'Idli', image: require('../assets/idli.jpg') },
  { name: 'Sandwich', image: require('../assets/sandwich.jpg') },
  { name: 'Cake', image: require('../assets/cake.jpg') },
  { name: 'Dosa', image: require('../assets/dosa.jpg') },
  { name: 'Pav Bhaji', image: require('../assets/pavbhaji.jpg') },
];

const Categories: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => (
        <View key={index} style={styles.subContainer}>
          <Image source={item.image} resizeMode='contain' style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;