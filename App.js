import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import Movie from './components/Movie';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let shop = [
    {id: 35, name: 'jumper', color: 'red', price: 20},
    {id: 42, name: 'shirt', color: 'blue', price: 15},
    {id: 56, name: 'pants', color: 'green', price: 25},
    {id: 71, name: 'socks', color: 'black', price: 5},
    {id: 72, name: 'socks', color: 'white', price: 5},
  ]

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  });

  return (
    <ScrollView style={styles.container}>
      <Text>Lokas fina app!</Text>
        {data.map((item, key) =>
          <Movie item={item} key={item.id}/>
        )}
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
