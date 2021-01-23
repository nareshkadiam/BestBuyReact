import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

function Header() {
  return (
    <View style={style.headerStyle}>
      <TouchableOpacity>
        <Image
          style={{marginLeft: 15, width: 25, height: 35}}
          source={require('../../assets/burgericon.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{marginLeft: 15, width: 35, height: 35}}
          source={require('../../assets/backicon.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{width: 52, height: 35}}
          source={require('../../assets/bestbuylogo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{marginRight: 15, width: 35, height: 35}}
          source={require('../../assets/searchicon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: '9%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
});
export default Header;
