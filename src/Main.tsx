// src/Main.tsx

import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import ProfileCard from './components/ProfileCard';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard 
        Name={"Johnny Bravo"} 
        Subtitle={"Whoa, mama!"} 
        Introduction={"Hey there, pretty mama! The name's Johnny Bravo.!!"} 
       />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a9a095',
  },
});

export default Main;
