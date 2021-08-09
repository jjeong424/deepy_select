import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  DevSettings,
} from "react-native";
import DATA from '../CategorySampleData';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Category = ({item}) => (
  <TouchableOpacity
    style={{...styles.btn, flex: 1}}>
    <View style={styles.CategoryContainer}>
        <Text style={styles.CategoryText}>{item.Category}</Text>
    </View>
  </TouchableOpacity>
);

const Item = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Home')}
    style={{...styles.btn, flex: 1}}>
    <View style={styles.ItemContainer}>
        <Text style={styles.price}>{item}</Text>
    </View>
  </TouchableOpacity>
);

function CategoryScreen() {
  const renderItem = ({item}) => {
    return (
        <Item
        // navigation={navigation}
        item={item}
      />
    );
  };

  const renderCategory = ({item}) => {
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <Category
        // navigation={navigation}
        item={item}
      />
      <FlatList 
          data={item.data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          numColumns={2}
          />
      </View>
    );
  };
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon name='search1' style={styles.SearchIcon}/>
          <TextInput style={styles.TextInput} placeholder='검색하세요!'/>
        </View>
      </View>
      <View >
          <FlatList
          data={DATA}
          renderItem={renderCategory}
          numColumns={1}
          />
      </View>
    </View>
  );
}

export default CategoryScreen;