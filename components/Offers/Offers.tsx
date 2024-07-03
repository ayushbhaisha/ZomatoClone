import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './OffersStyle';

interface OffersProps {
  title: string;
  subtitle: string;
  image: any;
}

const Offers: React.FC<OffersProps> = ({ image, title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default Offers;