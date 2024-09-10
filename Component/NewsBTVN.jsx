import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the bell icon

const newsData = [
  {
    id: '1',
    title: '15 giờ bão Yagi tàn phá các tỉnh phía Bắc',
    source: 'vnexpress',
    time: '4h ago',
    image: 'https://i1-vnexpress.vnecdn.net/2024/09/10/settop-1725949087-4380-1725949126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=qDgnu0DP88lNxpaD8zSAEg',
  }, 
  {
    id: '2',
    title: '15 giờ bão Yagi tàn phá các tỉnh phía Bắc',
    source: 'vnexpress',
    time: '4h ago',
    image: 'https://i1-vnexpress.vnecdn.net/2024/09/10/settop-1725949087-4380-1725949126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=qDgnu0DP88lNxpaD8zSAEg',
  }, 
  {
    id: '3',
    title: '15 giờ bão Yagi tàn phá các tỉnh phía Bắc',
    source: 'vnexpress',
    time: '4h ago',
    image: 'https://i1-vnexpress.vnecdn.net/2024/09/10/settop-1725949087-4380-1725949126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=qDgnu0DP88lNxpaD8zSAEg',
  },
  {
    id: '4',
    title: '15 giờ bão Yagi tàn phá các tỉnh phía Bắc',
    source: 'vnexpress',
    time: '4h ago',
    image: 'https://i1-vnexpress.vnecdn.net/2024/09/10/settop-1725949087-4380-1725949126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=qDgnu0DP88lNxpaD8zSAEg',
  },
];

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>News</Text>
    <Ionicons name="notifications-outline" size={24} color="black" style={styles.bellIcon} />
  </View>
);

const Trending = () => (
  <View style={styles.trending}>
    <Text style={styles.trendingTitle}>Trending</Text>
    <TouchableOpacity>
      <Text style={styles.seeAll}>See All</Text>
    </TouchableOpacity>
    <View style={styles.trendingItem}>
      <Image source={{ uri: newsData[0].image }} style={styles.trendingImage} />
      <Text style={styles.trendingText}>{newsData[0].title}</Text>
      <Text style={styles.trendingSource}>{newsData[0].source} • {newsData[0].time}</Text>
    </View>
  </View>
);

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <View style={styles.categories}>
    {['Tất cả', 'Tin mới', 'Tin hot', 'Tin nhanh'].map((category, index) => (
      <TouchableOpacity
        key={index}
        style={styles.categoryButton}
        onPress={() => setSelectedCategory(category)}
      >
        <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategory]}>
          {category}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const NewsBTVN = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.source}>{item.source} • {item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TextInput style={styles.searchBar} placeholder="Search" />
      <Trending />
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  trending: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  seeAll: {
    fontSize: 14,
    color: '#007BFF',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  trendingItem: {
    alignItems: 'center',
  },
  trendingImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  trendingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  trendingSource: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryButton: {
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedCategory: {
    textDecorationLine: 'underline',
  },
  newsItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  source: {
    fontSize: 14,
    color: '#555',
  },
});

export default NewsBTVN;
