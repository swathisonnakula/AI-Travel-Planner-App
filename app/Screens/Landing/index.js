import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const Landing = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require(`./../../Assests/Images/travelling.jpg`)}
          style={styles?.bgImage}
        />
      </View>
      <View style={styles?.textContainer}>
        <Text style={styles?.title}>AI Travel Planner</Text>
        <Text style={styles?.subTitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
        <View style={styles?.buttonContainer}>
          <Text style={styles?.button}>Sign Up with Google</Text>
        </View>
      </View>
    </View>
  );
};
export default Landing;
