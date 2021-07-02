import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { datatestid, onclick, text } = this.props;
    return (
      <button
        type="button"
        data-testid={ datatestid }
        onClick={ onclick }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  datatestid: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

}.isRequired;

export default Button;
