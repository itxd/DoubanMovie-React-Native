'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
} = React;

var SearchScreen = require("./SearchScreen");

var titleBarHeight = Dimensions.get('window').height / 12;
var textInputHeight = titleBarHeight - 20;

var titleBarMarginTop = 0;
if (Platform.OS === 'ios') {
    titleBarMarginTop = 10;
}

var TouchableElement = TouchableHighlight;
if (Platform.OS === 'android') {
    TouchableElement = TouchableNativeFeedback;
}

var SearchBar = React.createClass({

  _onPressSearchButton: function(){
    
  },

  _onPressBackButton: function() {
    if (this.props.navigator) {
      this.props.navigator.pop();
    }
  },

  render: function() {
    return (
      <View>
      <View style={styles.container}>
        <TouchableElement onPress={this._onPressBackButton}>
            <View style={styles.actionItem}>
              <Image
                style={styles.searchButton}
                source={require('./images/ic_back.png')}
                resizeMode='contain' />
            </View>
        </TouchableElement>
        <TextInput
            style={styles.textInput}
            placeholder="输入您想看的电影..."
            placeholderTextColor="#888888"
            underlineColorAndroid="transparent"
            autoFocus={true}
            multiline={false} />
        <TouchableElement onPress={this.props.onSearchPress}>
            <View style={styles.actionItem}>
              <Image
                style={styles.searchButton}
                source={require('./images/ic_search_white_48dp.png')}
                resizeMode='contain' />
            </View>
        </TouchableElement>
      </View>
      <View style={styles.titleBarSplitLine} />
      </View>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1, 
    flexDirection: "row",
    marginTop: titleBarMarginTop,
    alignItems: 'center',
    height: titleBarHeight, 
    backgroundColor: '3e9ce9',
  },

  titleText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'white'
  },

  titleBarSplitLine: {
    height: 0, 
    backgroundColor: '#e5e5e5',
  },

  searchButton: {
    width: 32,
    height: 32,
    marginLeft: 8,
    marginRight: 8,
  },

  actionItem: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },

  textInput: {
    flex: 1, 
    color: 'white',
    backgroundColor: 'white',
    height: textInputHeight, 
  }
});

module.exports = SearchBar;
