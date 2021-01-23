import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import axios from 'axios';
import Product from '../components/Product';

function Products({route, navigation}) {
  const [productList, setProductList] = useState([]);

  const getProductList = (productId) => {
    let url =
      'https://api.bestbuy.com/v1/products(categoryPath.id=' +
      productId +
      ')?format=json&apiKey=g5sdtzjtgpqhb9fdkka5ygcg&page=1';
    axios
      .get(url)
      .then((resp) => {
        let prdList = resp.data.products;
        console.log(prdList);
        if (prdList.length > 0) {
          setProductList(prdList);
        } else {
          alert('No products available in this category at the moment.');
        }
      })
      .catch((e) => {
        console.error('error in service call --> ' + e);
      });
  };

  useEffect(() => {
    getProductList(route.params.catId);
  }, []);

  const prdClickHandler = (product) => {
    navigation.navigate('ProductDetails', {productInfo: product});
  };

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
      <Text style={styles.resultStyle}>
        Results for : {route.params.results}
      </Text>
      <FlatList
        style={styles.productsStyle}
        data={productList}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => prdClickHandler(item)}>
            <Product info={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsStyle: {
    backgroundColor: 'white',
    margin: 5,
    marginTop: 0,
    padding: 2,
    color: 'black',
    borderColor: '#454545',
    borderWidth: 1,
    borderRadius: 3,
  },
  resultStyle: {
    margin: 10,
    padding: 2,
    fontSize: 20,
  },
});
export default Products;
