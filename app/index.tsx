import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import LoginForm from '@/components/LoginForm'
import Footer from '@/components/Footer';

const App = () => {
  return (
    <ImageBackground 
    source={{uri: 'https://techcrunch.com/wp-content/uploads/2023/08/bluesky-005.jpg'}}
     style={styles.backgroundImage}>
    <View style = {styles.container}>
      <LoginForm />
      <Footer />
    </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        width:140,
        borderColor: 'gray',
        borderWidth: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})