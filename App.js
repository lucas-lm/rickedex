import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {AdMobBanner} from 'react-native-admob';

import Card from './Card';

import api from './api';

const App = () => {
  const [ricks, setRicks] = useState([]);
  const [next, setNext] = useState(1);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {info, results},
      } = await api.get(`/character/?page=${next}`);
      if (!info.next) {
        setEnd(true);
      }
      setRicks(r => [...r, ...results]);
    };
    if (!end) {
      fetchData();
    }
  }, [end, next]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.root}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-5719011452605321/1566925125"
          />
          <Text style={styles.title}>Rickedex</Text>
          <FlatList
            contentContainerStyle={styles.list}
            data={ricks}
            keyExtractor={({id}) => String(id)}
            renderItem={Card}
            onEndReached={() => setNext(n => n + 1)}
            onEndReachedThreshold={0.1}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#336699',
  },
  root: {
    backgroundColor: '#eeffff',
  },
});

export default App;
