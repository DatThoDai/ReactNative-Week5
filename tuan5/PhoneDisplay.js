import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const PhoneDisplay = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedColor = '#234896' } = route.params || {};

  const phoneImages = {
    '#234896': require('./images/vs_blue.png'),
    '#F30D0D': require('./images/vs_red.png'),
    '#000000': require('./images/vs_black.png'),
    '#C5F1FB': require('./images/vs_silver.png'),
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={phoneImages[selectedColor]} style={styles.phoneImage} />
      </View>

      <Text style={styles.phoneName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <View style={styles.ratingContainer}>
        <View style={styles.starContainer}>
          {[...Array(5)].map((_, index) => (
            <Image key={index} source={require('./images/star.png')} style={styles.starIcon} />
          ))}
        </View>
        <Text style={styles.reviewText}>( Xem 828 đánh giá )</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>1.790.000 đ</Text>
        <Text style={styles.originalPrice}>1.790.000 đ</Text>
      </View>

      <View style={styles.priceGuaranteeContainer}>
        <Text style={styles.guaranteeText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <TouchableOpacity>
          <Text style={styles.questionMark}>?</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity
        style={styles.colorSelectButton}
        onPress={() => navigation.navigate('ColorSelection', { selectedColor })}
      >
        <Text style={styles.colorSelectText}>4 MÀU - CHỌN MÀU</Text>
        <Text style={styles.arrowIcon}>></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  phoneName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  reviewText: {
    fontSize: 14,
    marginLeft: 40,
  },
  starContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#808080',
    fontSize: 16,
    marginLeft: 50,
  },
  discountedPrice: {
    color: '#EE0D0D',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  priceGuaranteeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  guaranteeText: {
    fontSize: 14,
    color: '#EE0D0D',
    marginRight: 5,
    marginLeft: 10,
  },
  questionMark: {
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 1,
    width: 20,
    height: 20,
    textAlign: "center",
  },
  colorSelectButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  colorSelectText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: 30,
    color: '#808080',
    position: "absolute",
    right: 10,
  },
  buyButton: {
    backgroundColor: '#E53935',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PhoneDisplay;
