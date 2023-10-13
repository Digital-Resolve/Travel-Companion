import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableWithoutFeedback, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { Stack } from 'expo-router';
import styles from './index.style'

const filter = ["Top 30", "Nature", "Gastro", "Golf", "Free Wifi"]

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState('Top 30')

    //MAP SVG
    const Map = () => {
        return (
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                <Path d="M23.3364 3.62303L16.1364 0.123325C15.9697 0.0422244 15.7858 0 15.5994 0C15.413 0 15.2291 0.0422244 15.0624 0.123325L8.4 3.36288L1.7364 0.123325C1.5534 0.0344292 1.35007 -0.00751158 1.14571 0.00148606C0.941346 0.0104837 0.742744 0.0701209 0.568763 0.174733C0.394782 0.279346 0.251201 0.42546 0.151655 0.599199C0.0521092 0.772937 -9.52197e-05 0.968531 1.30381e-07 1.1674V16.3328C1.30381e-07 16.7749 0.2568 17.1785 0.6636 17.3769L7.8636 20.8766C8.03032 20.9577 8.21418 20.9999 8.4006 20.9999C8.58702 20.9999 8.77088 20.9577 8.9376 20.8766L15.6 17.637L22.2636 20.8754C22.4461 20.9651 22.6493 21.0077 22.8536 20.9989C23.0579 20.9901 23.2564 20.9303 23.43 20.8252C23.784 20.6117 24 20.2373 24 19.8325V4.6671C24 4.22498 23.7432 3.82134 23.3364 3.62303ZM9.6 5.38804L14.4 3.05491V15.6118L9.6 17.945V5.38804ZM2.4 3.05491L7.2 5.38804V17.945L2.4 15.6118V3.05491ZM21.6 17.945L16.8 15.6118V3.05491L21.6 5.38804V17.945Z" fill="#4296EE"/>
            </Svg>
        )
    }

    //Magnifiying Glass SVG
    const Magni = () => {
        return (
            <Svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                <Path opacity="0.3" d="M9.29534 16.181C11.1771 16.181 12.9342 15.6128 14.3625 14.666L19.7357 19.6528C19.9851 19.8843 20.3139 20 20.6539 20C21.3908 20 21.9236 19.474 21.9236 18.8006C21.9236 18.485 21.8102 18.1904 21.5608 17.959L16.2216 12.9932C17.3439 11.6255 18.0127 9.93161 18.0127 8.09048C18.0127 3.64019 14.0904 0 9.29534 0C4.4889 0 0.578003 3.64019 0.578003 8.09048C0.578003 12.5408 4.4889 16.181 9.29534 16.181ZM9.29534 14.4345C5.54314 14.4345 2.45977 11.5623 2.45977 8.09048C2.45977 4.61862 5.54314 1.74645 9.29534 1.74645C13.0362 1.74645 16.1309 4.61862 16.1309 8.09048C16.1309 11.5623 13.0362 14.4345 9.29534 14.4345Z" fill="#242424"/>
            </Svg>
        )
    }


    return (
        <>
            <Stack.Screen options={{  headerShown: false }} />
            <ScrollView style={styles.safe}>

            <View style={styles.row}>
                <View style={styles.w80}>
                    <Text style={styles.mainHeader}>
                        South Africa 
                    </Text>
                </View>
                <View style={[styles.w20, {justifyContent: 'center', alignItems: 'flex-end', paddingRight: 16}]}>
                    <Map />
                </View>
            </View>

            <View style={[styles.row, {marginBottom: 24}]}>
                <Text style={[styles.mainSubText, styles.marginL16]}>
                    Choose another location
                </Text>
            </View>

            <View style={[styles.row, {marginBottom: 24}]}>
                <View style={styles.searchContainer}>

                    <View style={[styles.w80, {justifyContent: 'center'}]}>
                        <Text style={styles.searchText}>Enter name or destination</Text>
                    </View>

                    <View style={[styles.w20, {justifyContent: 'center', alignItems: 'center'}]}>
                        <Magni  />
                    </View>
                </View>
            </View>

            <View style={[styles.row, {marginBottom: 16}]}>
                <Text style={styles.categoryText}>Category</Text>
            </View>

            <View style={[styles.row, {marginBottom: 32}]}>
            <FlatList 
                data={filter}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={[styles.tab(activeFilter, item), {marginHorizontal: 8}]}
                    onPress={() => {
                        setActiveFilter(item);
                        // router.push(`/search/${item}`)
                    }}
                    >
                    <Text >{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item}
                // contentContainerStyle={{ columnGap: 8}}
                horizontal
            />
            </View>

            <View style={[styles.row, {marginBottom: 32}]}>
                <Text style={[styles.categoryText, styles.w80]}>Popular Destinations</Text>

                <Text style={[styles.viewAllText, styles.w20]}>View All</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.locationCard}>
                    <View style={styles.locationCategory}>
                        <View style={styles.row}>
                            
                        </View>
                    </View>

                </View>
            </View>

            </ScrollView>
        </>
    )
}

export default HomePage