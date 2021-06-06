import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const AppLoader = () => {
	return (
		<View style={styles.center}>
			<ActivityIndicator size='large' color='THEME.COLOR' />
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
