import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Product(props) {
  console.log(props.info.thumbnailImage);
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          margin: 2,
        }}>
        {props.info.onSale ? (
          <Text
            style={{
              backgroundColor: 'lightblue',
              fontSize: 16,
              color: 'red',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            !!!On Sale!!!
          </Text>
        ) : undefined}
      </View>
      <View style={styles.productRow}>
        <Image
          source={{
            uri:
              // 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1014/1014974_s.gif',
              props.info.thumbnailImage,
          }}
          style={{width: 100, height: 80, margin: 20}}
        />
        <View style={styles.productInfo}>
          <Text style={{fontSize: 14}}>{props.info.name}</Text>
          <Text style={{fontSize: 14, marginTop: 10}}>
            $ {props.info.regularPrice}
          </Text>
          <Text style={{fontSize: 14, marginTop: 10}}>
            Average Review {props.info.customerReviewAverage}
          </Text>
        </View>
      </View>
    </View>
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
});
export default Product;
