import React from 'react';
import PropTypes from 'prop-types';

class CalcKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <button type="button">
        {text}
      </button>
    );
  }
}

CalcKey.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CalcKey;
