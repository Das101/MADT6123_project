import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import colors from '../helper/colors';

const { width, height } = Dimensions.get('window');

export default ProfileScreen = () => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    const handleUpdate = () => {
        // handle updating user profile here
    };

    return (
        <View style={styles.container}>
            <View style={styles.centerView}>
                <Text style={styles.title}>My Profile</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={fullname}
                        onChangeText={setFullName}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Bio"
                        value={bio}
                        onChangeText={setBio}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Update Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.primary,
    },
    centerView: {
        width: width * 0.8,
        height: width ,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    input: {
        borderRadius: 4,
        padding: 10,
        marginVertical: 5,
        width: width * 0.7,
    },
    inputView: {
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        marginVertical: 10,
    },
    forgotText: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        width: width * 0.7,
        height: width * 0.12,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    registerButton: {
        width: width * 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    avatarContainer: {
        marginTop: height * 0.05,
        alignItems: 'center',
    },
    avatar: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 75,
        borderWidth: 1,
        borderColor: colors.gray,
        marginBottom: height * 0.02,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.white,
        padding: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.gray,
    },
    formContainer: {
        width: width * 0.8,
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    formInputView: {
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.7,
    },
    formIcon: {
        marginLeft: width * 0.03,
        marginRight: width * 0.04,
    }
})  