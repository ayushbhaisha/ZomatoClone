import React from 'react';
import { View, Text, ImageSourcePropType, ImageBackground } from 'react-native';
import { styles } from './RestaurantCardStyle';

export interface RestaurantCardProps {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  cuisine: string;
  price: string;
  discount: string;
  rating: number;
  time: string;
  distance: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ imageSource, title, cuisine, price, discount, rating, time, distance }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={imageSource} resizeMode='cover' style={styles.image}>
        <View style={styles.innerImageView}>
          <View style={styles.innerImageItem}>
            <Text style={styles.time}>{time} • {distance}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.rating}>{rating.toFixed(1)} ⭐</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{cuisine} • {price}</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.discount}>{discount}</Text>
      </View>
    </View>
  );
};

export default RestaurantCard;