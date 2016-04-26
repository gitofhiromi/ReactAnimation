/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    } from 'react-native';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

class AwesomeProject extends Component {
    componentWillMount() {  // Animate creation
        LayoutAnimation.spring();
    }

    getInitialState() {
        return { w: 100, h: 100 }
    }

    _onPress() {  // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }

    render: function() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Press me!</Text>
                </View>
            </TouchableOpacity>
        </View> );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    rightContainer: {
        flex: 1,
    },

    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },

    year: {
        textAlign: 'center',
    },

    thumbnail: {
        width: 53,
        height: 81,
    },

    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('ReactTest', () => ReactTest);
