/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import * as actions from '../../web/app/containers/App/actions';
import * as selectors from '../../web/app/containers/App/selectors';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const config = {
  cssClasses: [],
  labels: {
    logo: 'test logo',
  },
};

class Home extends Component<{}> { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.setLogo(config.labels.logo);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          from state: {this.props.appData.get('logo')}
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Home.propTypes = {
  setLogo: PropTypes.func,
  appData: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    setLogo: (logo) => dispatch(actions.setLogo(logo)),
  };
}

const mapStateToProps = () => createStructuredSelector({
  appData: selectors.makeSelectApp(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
