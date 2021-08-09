import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    CategoryContainer: {
      justifyContent:'center',
      borderColor: '#8b00ff',
      width: 205,
      height: 60,
      padding: 10,
    },
  
    CategoryText: {
      margin: 5,
      fontSize: 20,
      opacity: 0.8,
    },
  
    ItemContainer: {
      alignItems: 'center',
      justifyContent:'center',
      borderColor: 'gray',
      borderWidth: 0.4,
      width: 175,
      height: 40,
      margin: 5,
    },
  
    container: {
      justifyContent:'center',
      alignSelf: 'center',
      margin: 10,
      borderColor: '#8b00ff',
      borderWidth: 1,
      width: 350,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ffffff',
    },
    row: {
      flexDirection: 'row'
    },
    SearchIcon: {
      fontSize: 25,
      color: '#8b00ff', 
      margin: 10,
    },
    Item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    
  })

  export default styles;