import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = ({item}) => (
  <View style={styles.root}>
    <Image style={styles.image} source={{uri: item.image}} />
    <View style={styles.descriptionBox}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.small}>Last seen in {item.location.name}</Text>
      </View>
      <Text style={styles.paragraph}>
        {item.name}, from {item.origin.name}, is {item.status}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    width: 260,
    margin: 16,
    backgroundColor: '#3A3E39',
    borderRadius: 4,
  },
  image: {
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 260,
    height: 260,
  },
  descriptionBox: {
    padding: 8,
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  paragraph: {
    fontSize: 14,
    color: '#ffffff',
  },
  small: {
    fontSize: 10,
    color: '#ffffff',
  },
});

export default Card;
