import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import DATA from '../../SampleData';
import Spacer from '../../components/Spacer';

const Item = ({item, onPress, style, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('ProductDetail', {...item})}
    style={{...styles.btn, flex: 1}}>
    <Image style={styles.image} source={item.image} />
    <View style={styles.footer}>
      <Text style={styles.price}>{item.price}원</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return (
      <Item
        navigation={navigation}
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
        <Spacer>
          <Text style={styles.text}>
            사용자님의 취향은
            <Text style={styles.textpurple}>#컬러풀 #펑키 #2000년대</Text>
            이군요!
          </Text>
        </Spacer>
        <Spacer>
          <Text style={styles.title}>
            사용자님만을 위한
            <Text style={styles.titlepurple}>큐레이션</Text>
          </Text>
          <Text style={styles.text}>사용자님, 이 옷들은 어떠세요??</Text>
        </Spacer>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;