import { View, Text, ScrollView, TouchableOpacity, Image, ImageStyle } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as CLASS from '../assets/Class'
import * as CTEXT from '../assets/CustomText'
import * as CUSTOMCACHE from '../data/store';
import * as SVG from '../assets/svgXml'
import styles, { vw } from '../assets/stylesheet';
import clrStyle, { NGHIASTYLE } from '../assets/componentStyleSheet';
import { factoryData } from '../data/factoryData';
import * as FORMATDATA from '../data/interfaceFormat';
import getColor from '../assets/getColor';

export default function Home() {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(CUSTOMCACHE.RootContext);

    return (
        <CLASS.SSBarWithSaveArea>
            <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.paddingH6vw]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateRecipe' as never)}
                    style={[styles.padding2vw, styles.borderRadius100, { backgroundColor: getColor('Background/6') }]}>
                    {SVG.createRecipe(vw(8), vw(8))}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateRecipe' as never)}
                    style={[styles.padding2vw, styles.borderRadius100, { backgroundColor: getColor('Background/6') }]}>
                    {SVG.bellIcon(vw(8), vw(8), getColor('Content/dark/4'))}
                </TouchableOpacity>
            </CLASS.ViewRowBetweenCenter>
        </CLASS.SSBarWithSaveArea>
    )
}