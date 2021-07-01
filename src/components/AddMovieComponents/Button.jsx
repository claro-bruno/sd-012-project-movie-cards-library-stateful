import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { addMovie } = this.props;

    return (
      <button type="button" data-testid="send-button" onClick={ addMovie }>
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default Button;
