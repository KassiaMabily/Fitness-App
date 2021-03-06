import React from 'react';
import { Text, StyleSheet, Dimensions, ImageBackground, View, TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface LiveProps extends TouchableHighlightProps {
    data: {
        id: string;
        title: string;
        thumbnail: string;
    }
}

export const PrimaryCard = ({ data, ...rest}: LiveProps) => {
    
    return (
        <TouchableHighlight 
            style={styles.container}
            {...rest}
        >
            <ImageBackground 
                imageStyle={{ 
                    borderRadius: 16
                }} 
                source={{uri: data.thumbnail}} 
                style={styles.image}
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>
                        {data.title}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get("window").width / 2) - 40,
        height: 250,
        borderRadius: 20,
        paddingVertical: 10,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    overlay: {
        backgroundColor:'rgba(0,0,0,0.2)',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10, 
        justifyContent: "flex-end",
    },
    
    title: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.heading,
    },
    text: {
        color: colors.white,
        fontFamily: fonts.text,
    }
});
