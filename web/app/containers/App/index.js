/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WelcomeBox from '../../components/WelcomeBox';
import * as actions from './actions';
import * as selectors from './selectors';

/* const config = {
  cssClasses: [],
  labels: {
    logo: 'test logo',
  },
};*/

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const payload = {
      logo: 'test logo',
      test: 'text test',
    };
    this.props.setLogo(payload);
  }

  render() {
    console.log(this.props);
    console.log(this.props.logo);

    return (
      <div>
        <Helmet
          titleTemplate="%s - codebase"
          defaultTitle="Codebase"
          meta={[
            { name: 'description', content: 'codebase' },
          ]}
        />
        {(this.props.children.props.children) ?
          React.Children.toArray(this.props.children.props.children) :
          <WelcomeBox logo={this.props.appData.get('logo')} />}
      </div>
    );
  }
}

App.propTypes = {
  setLogo: PropTypes.func,
  appData: PropTypes.object,
  logo: PropTypes.string,
  children: PropTypes.node,
};

function mapDispatchToProps(dispatch) {
  return {
    setLogo: (payload) => dispatch(actions.setLogo(payload)),
  };
}

const mapStateToProps = () => createStructuredSelector({
  appData: selectors.makeSelectApp(),
  logo: selectors.makeSelectAppLogo(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
