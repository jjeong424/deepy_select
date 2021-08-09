import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Spacer from '../../components/Spacer';
import styles from './styles';
import DATA from '../../SelectSampleData';

const Item = ({item, onPress, style, navigation}) => (
  <TouchableOpacity onPress={onPress} style={{...styles.btn, flex: 1}}>
    <Image style={styles.image} source={item.image} />
  </TouchableOpacity>
);

const SelectScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState([]);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? null : '#f9c2ff';
    return (
      <Item
        navigation={navigation}
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
        

        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            numColumns={1}
            key={1}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default SelectScreen;
