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
            location: 'Dubmin, Ireland'
        },
        { 
            id: '2', 
            title: 'Google',
            post: 'Product Designer',
            location: 'Toronto, Canada'
        },
        { 
            id: '3', 
            title: 'Shopify',
            post: 'Data Analytics',
            location: 'New York, USA'
        },
        { 
            id: '4', 
            title: 'Apple',
            post: 'Product Designer',
            location: 'Dubmin, Ireland'
        },
      ];

      const Item = ({ title }) => (
        <View style={{
            width: width * 0.9,
            height: width * 0.35,
            backgroundColor: colors.white,
            borderRadius: 15,
            marginHorizontal: width * 0.05,
            marginVertical: width * 0.02,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 4,
        }}>
          <Text>{title}</Text>
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
                renderItem={({ item }) => <Item title={item.title} />}
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
});

export default HomeScreen;