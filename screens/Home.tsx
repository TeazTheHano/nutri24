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
import { SvgXml } from 'react-native-svg';

export default function Home() {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(CUSTOMCACHE.RootContext);
    const [searchInput, setSearchInput] = React.useState('');
    const [searchResult, setSearchResult] = React.useState<any[]>([]);

    return (
        <CLASS.SSBarWithSaveArea>
            <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.paddingH6vw]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateRecipe' as never)}
                    style={[styles.padding2vw, styles.borderRadius100, { backgroundColor: getColor('Background/6') }]}>
                    {SVG.createRecipe(vw(8), vw(8))}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        // TODO: Add notification screen
                    }}
                    style={[styles.padding2vw, styles.borderRadius100, { backgroundColor: getColor('Background/6') }]}>
                    {SVG.bellIcon(vw(8), vw(8), getColor('Content/dark/4'))}
                </TouchableOpacity>
            </CLASS.ViewRowBetweenCenter>
            <ScrollView style={[styles.w100, styles.paddingH6vw]}>
                <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.gap3vw, styles.marginVertical3vw]}>
                    <CLASS.SearchBox
                        value={searchInput}
                        onChangeText={setSearchInput}
                        placeholder='Bạn muốn tìm gì?'
                        placeholderTextColor={getColor('Grey/100')}
                        fontFam='BeVietnamPro-Regular'
                        onClear={() => setSearchInput('')}
                        showSearchIcon
                        icon={<SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C11.91 1.25 12.25 1.59 12.25 2C12.25 2.41 11.91 2.75 11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 11.09 20.59 10.75 21 10.75C21.41 10.75 21.75 11.09 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75Z" fill="#6D6E6F"/><path d="M22 22.7499C21.81 22.7499 21.62 22.6799 21.47 22.5299L19.47 20.5299C19.18 20.2399 19.18 19.7599 19.47 19.4699C19.76 19.1799 20.24 19.1799 20.53 19.4699L22.53 21.4699C22.82 21.7599 22.82 22.2399 22.53 22.5299C22.38 22.6799 22.19 22.7499 22 22.7499Z" fill="#6D6E6F"/><path d="M17.5 9.53994C16.58 9.53994 14.44 8.41994 13.78 6.35994C13.33 4.94994 13.85 3.09994 15.48 2.56994C16.18 2.33994 16.91 2.44994 17.49 2.81994C18.06 2.44994 18.81 2.34994 19.51 2.56994C21.14 3.09994 21.67 4.94994 21.21 6.35994C20.56 8.45994 18.31 9.53994 17.5 9.53994ZM15.21 5.90994C15.67 7.35994 17.23 8.01994 17.51 8.04994C17.83 8.01994 19.36 7.27994 19.78 5.91994C20.01 5.18994 19.78 4.24994 19.05 4.00994C18.74 3.90994 18.32 3.96994 18.12 4.25994C17.98 4.46994 17.76 4.58994 17.51 4.59994C17.29 4.60994 17.03 4.48994 16.89 4.28994C16.66 3.95994 16.24 3.90994 15.94 3.99994C15.22 4.23994 14.98 5.17994 15.21 5.90994Z" fill="#6D6E6F"/></svg>`} width={vw(6)} height={vw(6)} />}
                        customStyle={[styles.flex1, styles.padding2vw, styles.borderRadius2vw, { backgroundColor: getColor('Grey/10') }]}
                    />
                    <TouchableOpacity style={[styles.paddingH3vw, styles.h100, styles.flexRowCenter, styles.borderRadius2vw, { backgroundColor: getColor('Grey/10') }]}>
                        <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="black"/><path d="M21.3 22.0001C21.12 22.0001 20.94 21.9301 20.81 21.8001L18.95 19.9401C18.68 19.6701 18.68 19.2301 18.95 18.9501C19.22 18.6801 19.66 18.6801 19.94 18.9501L21.8 20.8101C22.07 21.0801 22.07 21.5201 21.8 21.8001C21.66 21.9301 21.48 22.0001 21.3 22.0001Z" fill="black"/><path d="M13.27 8.88995C12.64 8.68995 11.97 8.80995 11.49 9.17995C11 8.80995 10.35 8.68995 9.71999 8.88995C8.35999 9.32995 7.92999 10.8799 8.30999 12.0599C8.88999 13.8699 10.8 14.8099 11.49 14.8099C12.16 14.8099 14.11 13.8499 14.67 12.0599C15.06 10.8799 14.63 9.32995 13.27 8.88995Z" fill="black"/></svg>`} width={vw(6)} height={vw(6)} />
                    </TouchableOpacity>
                </CLASS.ViewRowBetweenCenter>

                
            </ScrollView>
        </CLASS.SSBarWithSaveArea>
    )
}
