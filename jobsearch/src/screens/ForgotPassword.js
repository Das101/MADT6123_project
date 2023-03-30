import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import colors from '../helper/colors';

const { width, height } = Dimensions.get('window');

const ForgotPassword = ({ navigation }) => {
	const [email, setEmail] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.centerView}>
				<Text style={styles.title}>Forgot Your Password?</Text>
                <Text style={styles.semiTitle}>Enter your email address to retrive your password</Text>
				<View style={styles.inputView}>
					<TextInput
						style={styles.input}
						placeholder="Email"
						value={email}
						onChangeText={setEmail}
					/>
				</View>
				
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>CONFIRM</Text>
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
		color: colors.primary
	},
	centerView: {
		width: width * 0.8,
		height: width * 0.7,
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
	semiTitle: {
		color: colors.black,
		fontSize: 16,
		marginBottom: 5
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
		marginTop: 20,
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

export default ForgotPassword;