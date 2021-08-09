import React from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
const ProductDetailScreen = ({navigation, route}) => {
  return (
    <>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{flex: 1, height: 100}}
          source={JSON.stringify(route.params.image)}
        />
        <Text>제품 이름: {JSON.stringify(route.params.name)}</Text>
      </View>
    </>
  );
};

export default ProductDetailScreen;