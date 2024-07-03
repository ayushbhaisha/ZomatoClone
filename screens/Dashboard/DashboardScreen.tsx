import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, FlatList, ListRenderItem } from 'react-native';
import { styles } from './DashboardScreenStyle';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Offers from '../../components/Offers/Offers';
import Categories from '../../components/Categories/Categories';
import RestaurantCard, { RestaurantCardProps } from '../../components/RestaurantCard/RestaurantCard';

const RestaurantItemData: Array<RestaurantCardProps> = [{
  id: '1',
  title: "Radhe Dhokla",
  cuisine: "North Indian • Chinese",
  price: "₹200 for one",
  discount: "60% OFF up to ₹120",
  rating: 4.0,
  time: "22 mins",
  distance: "2.5 km",
  imageSource: require('../assets/radhe_dhokla.jpg'),
}, {
  id: '2',
  title: "Kailash Sweets & Snacks",
  cuisine: "Pure Veg • Mithai",
  price: "₹100 for one",
  discount: "30% OFF up to ₹75",
  rating: 4.3,
  time: "23 mins",
  distance: "3.5 km",
  imageSource: require('../assets/kailash_sweets.jpg'),
}
];

const ChipListData: Array<string> = ['Sort', 'Near and Fast', 'Jain Food', 'Rating 4.0+'];

const LocationComponent: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/location.png')} style={styles.iconImage} />
      <View>
        <Text style={styles.location}>Home</Text>
        <Text style={styles.address}>Vishal Society, New City Light, Althan</Text>
      </View>
    </View>
  );
};

const ExploreCard: React.FC = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsContainer}>
      <Offers
        image={require('../assets/offer.png')}
        title="Offers"
        subtitle="Up to 60% OFF"
      />
      <Offers
        image={require('../assets/award.png')}
        title="Awards '24"
        subtitle="Vote now"
      />
      <Offers
        image={require('../assets/gourmet.png')}
        title="Gourmet"
        subtitle="Selections"
      />
      <Offers
        image={require('../assets/train.png')}
        title="Food on train"
        subtitle="Delivery at seat"
      />
    </ScrollView>
  )
};

const ChipsList: React.FC = () => {
  return (
    <ScrollView style={styles.filterContStyle} contentContainerStyle={styles.filterContainer} horizontal showsHorizontalScrollIndicator={false}>
      {ChipListData.map((item: string) => {
        return (
          <TouchableOpacity style={styles.filterItemContainer}>
            <Text style={styles.filter}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const DashboardScreen: React.FC = () => {
  const renderItem = (item: RestaurantCardProps) => {
    return (
      <RestaurantCard
        id={item.id}
        title={item.title}
        cuisine={item.cuisine}
        price={item.price}
        discount={item.discount}
        rating={item.rating}
        time={item.time}
        distance={item.distance}
        imageSource={item.imageSource}
      />
    )
  };

  return (
    <ScrollView style={styles.container}>
      <LocationComponent />
      <TextInput style={styles.searchBar} placeholder='Search "ice cream"' />
      <HeaderTitle title={"Explore"} />
      <ExploreCard />
      <HeaderTitle title={"What's on your mind ?"} />
      <Categories />
      <HeaderTitle title={"All Restaurants"} />
      <ChipsList />
      <FlatList
        nestedScrollEnabled={true}
        data={RestaurantItemData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />
    </ScrollView>
  );
};

export default DashboardScreen;