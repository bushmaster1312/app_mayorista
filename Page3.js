import React, { useEffect, useState } from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions, Text, TextInput } from 'react-native';
import axios from 'axios';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / 1;

export default function Page3() {
  const [characterIndex, setCharacterIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const [apiText, setApiText] = useState('');
  const [apiText2, setApiText2] = useState('');
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const data = response.data.results;
        const urls = data.map(result => result.image);
        setData(data);
        setImageUrls(urls);
        setApiText(data[0].name);
        setApiText2(data[0].species);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleScroll = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(contentOffset.x / Dimensions.get('window').width);
    setCharacterIndex(currentIndex);
  };

  const filteredData = data.filter(character => {
    // Filtrar por nombre
    const nameMatch = character.name.toLowerCase().includes(searchText.toLowerCase());

    // Filtrar por especie
    const speciesMatch = character.species.toLowerCase().includes(searchText.toLowerCase());

    return nameMatch || speciesMatch;
  });

  return (
    <View style={styles.container}>
        <TextInput
        style={styles.searchInput}
        placeholder="Buscar por nombre o especie"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />

      <View style={[styles.box, styles.box1]}>
      
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        >
          {filteredData.map((character, index) => (
            <View key={index} style={styles.characterContainer}>
              <Text style={styles.text}>Nombre: {character.name}</Text>
              <Text style={styles.text}>Especie: {character.species}</Text>
              <Image source={{ uri: character.image }} style={styles.largeImage} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>Texto en el Box 2</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={styles.text}>Texto en el Box 3</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    height: box_height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#2196F3',
  },
  box2: {
    backgroundColor: '#8BC34A',
  },
  box3: {
    backgroundColor: '#e3aa1a',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  characterContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeImage: {
    width: 300,
    height: 300,
    marginVertical: 50, // Agrega margen vertical si es necesario
    marginHorizontal: 50, // Centra horizontalmente usando margen automático
  },
});
