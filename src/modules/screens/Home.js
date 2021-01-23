import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import axios from 'axios';

function Home({navigation}) {
  const [categories, setCategories] = useState([]);
  const [catDetails, setCatDetails] = useState({
    catId: 'cat00000',
    catName: '',
  });
  const [showBack, setShowBack] = useState(false);
  const [breadCrumb, setBreadCrumb] = useState('Home');

  const getCategories = (categoryId) => {
    let url =
      'https://api.bestbuy.com/v1/categories(id=' +
      categoryId.catDetails.catId +
      ')?format=json&apiKey=g5sdtzjtgpqhb9fdkka5ygcg';
    axios
      .get(url)
      .then((resp) => {
        let subCategories;
        if (resp.data.categories.length > 0) {
          subCategories = resp.data.categories[0].subCategories;
          console.log('categories --> ' + JSON.stringify(subCategories));
          if (subCategories.length > 0) {
            if (categoryId.catDetails.catId !== 'cat00000') {
              setBreadCrumb(
                (prevBreadCrumb) =>
                  `${prevBreadCrumb} -> ${categoryId.catDetails.catName}`,
              );
            }
            setCategories(subCategories);
          } else {
            navigation.navigate('Products', {
              catId: categoryId.catDetails.catId,
              results: categoryId.catDetails.catName,
            });
          }
        } else {
          navigation.navigate('Products', {catId: categoryId.catDetails.catId});
        }
      })
      .catch((e) => {
        console.error('error in service call --> ' + e);
      });
  };
  useEffect(() => {
    getCategories({catDetails});
  }, [catDetails]);

  const catClickHandler = (category) => {
    setShowBack(true);
    setCatDetails({catId: `${category.id}`, catName: `${category.name}`});
    navigation.navigate('Home');
  };

  const getBack = () => {
    // setCatDetails((prevCat) => {
    //   ({catId: `${prevCat.catId}`, catName: `${prevCat.catName}`});
    // });
    // navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => alert('This is under construction')}>
          <Image
            style={{marginRight: 15, width: 35, height: 35}}
            source={require('../../assets/searchicon.png')}
          />
        </TouchableOpacity>
      ),
      headerLeft: (navigation) =>
        ({showBack} ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                style={{marginLeft: 15, width: 25, height: 35}}
                source={require('../../assets/burgericon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{marginLeft: 15, width: 35, height: 35}}
                source={require('../../assets/backicon.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                style={{marginLeft: 15, width: 25, height: 35}}
                source={require('../../assets/burgericon.png')}
              />
            </TouchableOpacity>
          </View>
        )),
    });
  }, [showBack]);

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
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <Text style={styles.breadcrumb}>{breadCrumb}</Text>
      <FlatList
        style={styles.catergoriesStyle}
        ItemSeparatorComponent={renderSeparator}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => catClickHandler(item)}>
            <Text style={styles.categoryItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  catergoriesStyle: {
    backgroundColor: 'white',
    margin: 5,
    marginTop: 5,
    padding: 2,
    color: 'black',
    borderColor: '#454545',
    borderWidth: 1,
    borderRadius: 3,
  },
  categoryItem: {
    fontSize: 18,
    margin: 15,
  },
  breadcrumb: {
    margin: 10,
    padding: 2,
    fontSize: 20,
  },
});
export default Home;
