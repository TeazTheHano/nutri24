import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import styles, { vw } from '../assets/stylesheet'
import * as Class from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import { useNavigation } from '@react-navigation/native'
import clrStyle, { NGHIASTYLE } from '../assets/componentStyleSheet'
import { Play40Black } from '../assets/CustomText'

export default function Onboard() {
    const navigation = useNavigation();
    return (
        <View style={[styles.flex1]}>
            {statusBarTransparency(false, true)}
            <Image source={require('../assets/photos/onboardBg.png')} style={[styles.w100, styles.h50vh, styles.positionAbsolute, { resizeMode: 'cover' }] as ImageStyle} />
            <View style={[styles.flex1, styles.w100vw, styles.flexColCenter]}>
                <Image source={require('../assets/photos/onboard.png')} style={[styles.w80vw, styles.h50vh, { resizeMode: 'contain' }] as ImageStyle} />
            </View>
            <Class.ViewColCenter style={[styles.paddingV4vw, styles.h30vh]}>
                <Play40Black style={[styles.textCenter, { color: clrStyle.black }]}>Nutrition</Play40Black>
                <Play40Black style={[styles.textCenter, { color: clrStyle.black }]}>Foods</Play40Black>
            </Class.ViewColCenter>
        </View>
    )
}