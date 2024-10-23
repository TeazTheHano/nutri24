import { View, Text, ScrollView, TouchableOpacity, Image, ImageStyle } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as CLASS from '../assets/Class'
import * as CTEXT from '../assets/CustomText'
import * as CUSTOMCACHE from '../data/store';
import * as SVG from '../assets/svgXml'
import styles, { vw } from '../assets/stylesheet';
import { NGHIASTYLE } from '../assets/componentStyleSheet';
import { factoryData } from '../data/factoryData';
import * as FORMATDATA from '../data/interfaceFormat';

export default function Home() {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(CUSTOMCACHE.RootContext);

    return (
        <Text>dfajkhfdsa</Text>
    )
}