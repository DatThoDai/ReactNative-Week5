import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ColorSelection = () => {
    const [selectedColor, setSelectedColor] = useState('#234896');
    const navigation = useNavigation();

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleDone = () => {
        navigation.navigate('PhoneDisplay', { selectedColor });
    };

    const phoneImages = {
        '#234896': require('./images/vs_blue.png'),
        '#F30D0D': require('./images/vs_red.png'),
        '#000000': require('./images/vs_black.png'),
        '#C5F1FB': require('./images/vs_silver.png'),
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image source={phoneImages[selectedColor]} style={styles.phoneImage} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.phoneName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    <Text style={styles.phoneDetails}>
                        Màu: <Text style={{ fontWeight: 'bold'}}>
                            {selectedColor === '#234896' ? 'Xanh' : selectedColor === '#F30D0D' ? 'Đỏ' : selectedColor === '#000000' ? 'Đen' : 'Bạc'}
                        </Text>
                    </Text>
                    <Text style={styles.phoneDetails}>
                        Cung cấp bởi <Text style={{ fontWeight: 'bold' }}>Tiki Tradding</Text>
                    </Text>

                    <Text style={styles.phonePrice}>1.790.000 ₫</Text>
                </View>
            </View>


            <View style={styles.bottomContainer}>

                <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#C5F1FB' }]} onPress={() => handleColorChange('#C5F1FB')} />
                <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#F30D0D' }]} onPress={() => handleColorChange('#F30D0D')} />
                <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#000000' }]} onPress={() => handleColorChange('#000000')} />
                <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#234896' }]} onPress={() => handleColorChange('#234896')} />


                <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
                    <Text style={styles.doneButtonText}>Xong</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    phoneName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    phoneDetails: {
        fontSize: 14,
        marginBottom: 5,
    },
    phonePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EE0D0D',
    },
    bottomContainer: {
        flex: 2,
        backgroundColor: '#f0f0f0',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorOption: {
        width: 60,
        height: 60,
        marginVertical: 10,
    },
    doneButton: {
        backgroundColor: '#1952E294',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'stretch',
    },
    doneButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default ColorSelection;
