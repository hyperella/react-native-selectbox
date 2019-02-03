import React, { Component } from 'react';
import {
	Image,
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	TouchableWithoutFeedback,
	Modal,
	Dimensions,
	ScrollView,
	LayoutAnimation,
	UIManager,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable';

class SelectBox extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show: false,
			height: props.height,
			search: false,
			selected: props.defaultValue || null
		}
	}

	componentWillMount() {
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	toggleOptions = () => {
		this.setState((prevstate) => {
			prevstate.show = !prevstate.show;
			return prevstate;
		});


		this.setState((prevstate) => {
			prevstate.showOptions = !prevstate.showOptions;
			return prevstate;
		});

	}

	show = () => {
		this.setState((prevstate) => {
			prevstate.show = true;
			return prevstate;
		});

		this.setState((prevstate) => {
			prevstate.showOptions = true;
			return prevstate;
		});

	}

	hide = () => {
		this.setState((prevstate) => {
			prevstate.show = false;
			return prevstate;
		});

		this.setState((prevstate) => {
			prevstate.showOptions = false;
			return prevstate;
		});

	}

	toggleHeight = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

		this.setState((prevstate) => {
			if(prevstate.height == this.props.height) {
				prevstate.height = Dimensions.get('window').height - 50
			}
			else {
				prevstate.height = this.props.height
			}

			return prevstate;
		})
	}


	toggleSearch = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState((prevstate) => {
			prevstate.search = !prevstate.search;
			return prevstate;
		});
	}

	pick = (value) => {

		this.hide()

		this.setState({selected: value});

		this.props.onChange(value);

	}

	render() {

		return(
			<View style={[this.props.optionStyle]}>
			<TouchableWithoutFeedback onPress={() => this.toggleOptions()}>
			<View>
			<Text style={this.props.optionTextStyle}>{this.state.selected != null && this.props.options.some(k => k[this.props.valueKey] == this.state.selected) ? this.props.options.find(k => k[this.props.valueKey] == this.state.selected)[this.props.textKey] : this.props.defaultText}</Text>
			</View>
			</TouchableWithoutFeedback>

			<Modal animationType="none"
			transparent={true}
			visible={this.state.show}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.');
			}}>
			<View style={Styles.wrapper}>
			<TouchableWithoutFeedback onPress={() => this.toggleOptions()}>
			{this.state.showOptions ? <Animatable.View animation="fadeIn" duration={100} style={{backgroundColor: 'rgba(0,0,0,.2)', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%', height: Dimensions.get('window').height}}></Animatable.View> : <View></View>}
			</TouchableWithoutFeedback>
			{this.state.showOptions ? <Animatable.View duration={300} animation="slideInUp" style={[Styles.options, {height: this.state.height}]}>
			<View style={Styles.header}>
			{!this.state.search ? <Text style={Styles.headerText}>{this.props.defaultText}</Text> : null}


			<TouchableWithoutFeedback onPress={() => this.toggleHeight()}>
			<View>
			<Image source={require('./img/resize.png')} style={{height: 20, width: 20}} resizeMode="contain"/>
			</View>
			</TouchableWithoutFeedback>

			</View>
			<ScrollView>
			{this.props.options.map((option, key) => (
				<TouchableOpacity key={key} style={Styles.option} onPress={() => this.pick(option[this.props.valueKey])}>
				<Text>{option[this.props.textKey]}</Text>
				{option[this.props.valueKey] == this.state.selected ? <Text>✔</Text> : null}
				</TouchableOpacity>
				))}
			</ScrollView>
			</Animatable.View> : null}
			
			</View>
			</Modal>
			</View>
			);

	}

}





const Styles = StyleSheet.create({
	select: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	select_wrapper: {
		flex: 1,
		flexDirection: 'row'
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		flex: 1,
	},
	options: {
		height: 200,
		backgroundColor: '#fff',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		flex: 1,
		position: 'absolute',
		bottom: 0,
		width: Dimensions.get('window').width,
		left: 0,
		right: 0
	},
	header: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: 'rgba(0,0,0,.05)',
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 16,
		color: '#333',
		fontWeight: 'bold',
		textAlign: 'left',
		flex: 1
	},
	option: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		paddingBottom: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	optionText: {
		fontSize: 15
	}
})


SelectBox.propTypes = {
	options: PropTypes.array.isRequired,
	defaultText: PropTypes.string.isRequired,
	valueKey: PropTypes.string.isRequired,
	textKey: PropTypes.string.isRequired,
	optionStyle: PropTypes.object,
	optionTextStyle: PropTypes.object
}


SelectBox.defaultProps = {
	options: [],
	defaultText: 'Pick one...',
	valueKey: null,
	textKey: null,
	optionStyle: Styles.select_wrapper,
	optionTextStyle: Styles.optionText
}

export default SelectBox