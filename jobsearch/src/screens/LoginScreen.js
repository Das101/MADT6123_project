import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import colors from '../helper/colors';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		navigation.navigate('BottomStack')
	};

	return (
		<View style={styles.container}>
			<View style={styles.centerView}>
				<Text style={styles.title}>Log in</Text>
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
				<TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotButton}>
					<Text style={styles.forgotText}>Forgot Password?</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => navigation.navigate('Register')} 
						style={styles.registerButton}>
					<Text>New Here? </Text><Text style={styles.forgotText}>Register</Text>
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
		marginBottom: 20,
		color: colors.primary,
		marginLeft: -width * 0.55
	},
	centerView: {
		width: width * 0.8,
		height: width * 0.9,
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: colors.white,
		borderRadius: 10,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 4
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
		marginVertical: 10
	},
	forgotButton: {
		width: width * 0.7,
		alignItems: 'flex-end',
		marginVertical: 6
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
	registerButton: {
		width: width * 0.7,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10
	},
	buttonText: {
		color: colors.white,
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 5
	},
});

export default LoginScreen;