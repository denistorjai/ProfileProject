// src/Main.tsx

import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';

interface ProfileCardProps {
    Name: string;
    Subtitle: string;
    Introduction: string;
}  

const ProfileCard: React.FC<ProfileCardProps> = ({ Name, Subtitle, Introduction }) => {
  return (
    <View style={styles.Container} >
        <Image style={styles.Banner} source={require('../../assets/banner.jpg')} />
        <Image style={styles.ProfilePicture} source={require('../../assets/profilePhoto.jpeg')}/>
        <View style={styles.TextContainer} >  
            <Text style={styles.Name} > {Name} </Text>
            <Text style={styles.Subtitle} > {Subtitle} </Text>
            <Text style={styles.Introduction} > {Introduction} </Text>
            <View style={styles.MediaContainer} > 
                <Image style={styles.SocialMediaIcon} source={require('../../assets/fb.png')} />
                <Image style={styles.SocialMediaIcon} source={require('../../assets/insta.png')} />
                <Image style={styles.SocialMediaIcon} source={require('../../assets/linkedin.png')} />
                <Image style={styles.SocialMediaIcon} source={require('../../assets/twitter.png')} />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    backgroundColor: '#f6eee5',
    width: 340,
    height: 440,
    borderRadius: 12,
    overflow: 'hidden',
  },
  Banner: {
    alignSelf: 'center',
    width: '100%',
    height: 150,
  },
  ProfilePicture: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 90,
  },
  TextContainer: {
    paddingTop: 72,
  },
  Name: {
    fontFamily: 'Pacifico',
    fontSize: 25,
    color: '#ff6801',
    alignSelf: 'center',
    paddingTop: 2,
  },
  Subtitle: {
    fontFamily: 'Pacifico',
    fontSize: 20,
    color: '#2d3646',
    alignSelf: 'center',
    paddingTop: 6,
  },
  Introduction: {
    alignSelf: 'center',
    fontSize: 19,
    padding: 8,
    paddingTop: 7,
    color: '#7e7c76',
  },
  MediaContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 27,
    gap: 40,
  },
  SocialMediaIcon: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});

export default ProfileCard;
