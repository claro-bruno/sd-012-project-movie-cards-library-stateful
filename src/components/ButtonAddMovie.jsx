import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onChange }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
