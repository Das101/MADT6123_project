import React, { useState } from 'react';
import {
    Dimensions,
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    TextInput,
    FlatList
} from 'react-native';
import colors from '../helper/colors';
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');

    const SampleData = [
        {
            id: '1',
            title: 'Apple',
            post: 'Product Designer',
            location: 'Dubmin, Ireland',
            type: ['Freelance', 'Part-Time']
        },
        {
            id: '2',
            title: 'Google',
            post: 'Product Designer',
            location: 'Toronto, Canada',
            type: ['Freelance', 'Full-Time']
        },
        {
            id: '3',
            title: 'Shopify',
            post: 'Data Analytics',
            location: 'New York, USA',
            type: ['Full-Time']
        },
        {
            id: '4',
            title: 'Apple',
            post: 'Product Designer',
            location: 'Dubmin, Ireland',
            type: ['Full-Time']
        },
    ];

    const Item = ({ item }) => (
        <View style={styles.itemMainContainer}>
            <View style={styles.itemTitleContainer}>
                <Image
                    source={require('../assets/images/ic_test_img.png')}
                    style={{ width: 45, height: 45 }}
                />
                <View style={styles.textView}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemPost}>{item.post}</Text>
                </View>
                <Image
                    source={require('../assets/images/ic_fav_red.png')}
                    style={styles.icon}
                />
            </View>
            <View style={styles.itemLocationView}>
                <Image
                    source={require('../assets/images/ic_location.png')}
                    style={{ width: 20, height: 20 }}
                />
                <Text style={styles.itemLocationText}>{item.location}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
                marginVertical: 10
            }}>
                {item.type.map(type_data => (
                    <View style={{ 
                        backgroundColor: colors.primary,
                        padding: 6,
                        borderRadius: 8,
                        marginHorizontal: 5
                    }}>
                    <Text style={{
                        color: colors.white, 
                        marginHorizontal: 4
                    }}>{type_data}</Text>
                    </View>
                ))}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.smallText}>Welcome!</Text>
                    <Text style={styles.mediumText}>John Doe</Text>
                </View>
                <Image source={require('../assets/images/ic_notification.png')} style={styles.icon} />
            </View>
            <View style={styles.inputView}>
                <Image source={require('../assets/images/ic_search.png')} style={styles.iconSearch} />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            <Text style={styles.popularText}>Popular Jobs</Text>
            <View>
                <FlatList
                    data={SampleData}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginRight: 10,
    },
    smallText: {
        fontSize: 15,
        color: colors.white
    },
    mediumText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        color: colors.white
    },
    popularText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginHorizontal: 20,
        color: colors.white
    },
    input: {
        borderRadius: 4,
        padding: 10,
        width: width * 0.7,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        margin: 20,
        padding: 8
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconSearch: {
        width: 25,
        height: 25,
    },
    itemMainContainer: {
        width: width * 0.9,
        height: width * 0.38,
        backgroundColor: colors.white,
        borderRadius: 15,
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.02,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    itemTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 15
    },
    textView: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: width * 0.6
    },
    itemTitle: {
        fontSize: 15,
        color: colors.secondary
    },
    itemPost: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.secondary
    },
    itemLocationView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 15
    },
    itemLocationText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.secondary
    }
});

export default HomeScreen;