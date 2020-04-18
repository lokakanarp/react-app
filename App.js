import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, StatusBar } from 'react-native';
import Movie from './components/Movie';
import Header from './components/Header';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const headerTitle = "hallå"

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  });

  return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="red" />
        <Header title={headerTitle} />
        {isLoading ? <ActivityIndicator/> : (
          data.map((item, key) =>
          <Movie item={item} key={item.id}/>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    height: 50,
    margin: 5,
  }
});
