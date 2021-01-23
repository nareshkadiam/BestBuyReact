import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import axios from 'axios';
import Star from '../components/Star';
import {FlatList} from 'react-native-gesture-handler';

function ProductDetails({route, navigation}) {
  const productInfo = route.params.productInfo;
  const rating = Math.round(productInfo.customerReviewAverage);
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);

  const gotoViewImages = () => {
    navigation.navigate('ImgaeList', {imgList: productInfo.images});
  };

  useEffect(() => {
    let url =
      'https://api.bestbuy.com/v1/reviews(sku=' +
      productInfo.sku +
      ')?format=json&apiKey=g5sdtzjtgpqhb9fdkka5ygcg';
    axios
      .get(url)
      .then((resp) => {
        let prdReviews = resp.data.reviews;
        setTotalReviews(resp.data.total);
        console.log(prdReviews);
        if (prdReviews.length > 0) {
          setReviews(prdReviews);
        } else {
          alert('No reviews available in this product at the moment.');
        }
      })
      .catch((e) => {
        console.error('error in service call --> ' + e);
      });
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.productRow}>
        <View>
          <Image
            source={{
              uri:
                // 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1014/1014974_s.gif',
                productInfo.thumbnailImage,
            }}
            style={{width: 100, height: 80, margin: 20}}
          />
          <Button title="More..." onPress={() => gotoViewImages()} />
        </View>

        <View style={styles.productInfo}>
          <Text style={{fontSize: 16}}>{productInfo.name}</Text>
          <Text style={{fontSize: 16, marginTop: 10}}>
            ${productInfo.regularPrice}
          </Text>
          <Text style={{fontSize: 16, marginTop: 10}}>
            Average Review {productInfo.customerReviewAverage}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </View>
        </View>
      </View>
      <ScrollView style={{height: '10%'}}>
        <Text style={{margin: 10, fontSize: 16}}>
          {productInfo.longDescription}
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.addToCartStyle}
        onPress={() => alert('This item has been added to the cart.')}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          Add to Cart
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'grey',
          marginTop: 10,
          marginBottom: 10,
        }}></View>
      <Text style={{margin: 10, fontSize: 20}}>
        Total No of reviews: {totalReviews}
      </Text>
      <View style={{height: '45%', width: '96%'}}>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          data={reviews}
          renderItem={({item}) => (
            <ScrollView style={{margin: 10}}>
              <Text style={{marginTop: 5, marginBottom: 5, fontSize: 16}}>
                {item.title}
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5, fontSize: 16}}>
                Submitted by: {item.reviewer[0].name}
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5, fontSize: 16}}>
                Rating: {item.rating}
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5, fontSize: 16}}>
                {item.comment}
              </Text>
            </ScrollView>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  productInfo: {
    flexDirection: 'column',
    margin: 10,
    width: '60%',
  },
  addToCartStyle: {
    margin: 20,
    marginTop: 30,
    backgroundColor: 'red',
    padding: 10,
    borderColor: 'lightblue',
    borderRadius: 20,
  },
});
export default ProductDetails;
