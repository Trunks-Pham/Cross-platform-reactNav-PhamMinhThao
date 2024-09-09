import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView
import { newsData } from '../content'; // Đảm bảo đường dẫn đúng

const NewsList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      {item.image && (
        <Image 
          source={{ uri: item.image }} 
          style={styles.newsImage} 
          resizeMode="cover" 
        />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.content}>{item.content}</Text>
      {item.videoUrl && (
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: item.videoUrl }}
            style={styles.video}
          />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  newsItem: {
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  newsImage: {
    width: '100%',
    height: 200,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginTop: 12,
  },
  video: {
    flex: 1,
  },
});

export default NewsList;
