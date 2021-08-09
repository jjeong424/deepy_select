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
        <View style={styles.selectheader}>
          <Spacer>
            <Text style={styles.text}>어서오세요 이은비님!</Text>
            <Text style={styles.title}>좋아하시는 스타일을 골라주세요</Text>
            <Text style={styles.text}>
              <Text style={styles.textpurple}>이은비님만을 위한 </Text>
              빈티지 쇼핑몰을 만들어 드릴게요!
            </Text>
          </Spacer>
        </View>

        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            numColumns={3}
            key={3}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
        <View>
          <Button
            title="다음"
            onPress={() => navigation.navigate('HomeTabs')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default SelectScreen;
