import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GreenLogistic = ({navigation}) => {

  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/17/10/04/road-1831154_1280.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Experience the Paperless and secure-digital green logistics!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ewayauth')}
        >
          <Text style={styles.buttonText}>Green Logistics</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    height:"100vh",
    paddingVertical:300
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:250,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: '#66bb6a',
    backgroundColor: '#66bb6a',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default GreenLogistic;
