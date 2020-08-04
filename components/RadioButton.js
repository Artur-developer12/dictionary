import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;
		console.log(this.state.value)

		return (
			<View>
				{PROP.map(res => {
					return (
						<TouchableOpacity
							key={res.key}
							onPress={() => {
								this.setState({
									value: res.key,
								});
							}}
							style={styles.container}
						>

						<View style={styles.inner}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
						</TouchableOpacity>

					);
				})}
                {/* <Text> Selected: {this.state.value} </Text> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor:'#f0f0f0'
	},
	inner: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#000',
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#2C98F0',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#2C98F0',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});