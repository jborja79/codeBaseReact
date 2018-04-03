import React from 'react';
import PropTypes from 'prop-types';

export const config = {
  labels: {
    text: 'COMPONENT',
  },
};

class WelcomeBox extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {config.labels.text}
        <br />
        {this.props.logo}
      </div>
    );
  }
}


WelcomeBox.propTypes = {
  logo: PropTypes.string,
};

export default WelcomeBox;
