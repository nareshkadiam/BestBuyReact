import React from 'react';
import {FlatList, Image, View, SafeAreaView} from 'react-native';

function ImgaeList({route, navigation}) {
  const imgList = route.params.imgList;
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={imgList}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({item}) => (
          <View
            style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
            <Image
              source={{
                uri: item.href,
              }}
              style={{
                margin: 15,
                flexGrow: 1,
                height: 100,
                width: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default ImgaeList;
