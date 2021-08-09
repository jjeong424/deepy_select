
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const UserProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>UserProfileScreen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default UserProfileScreen;