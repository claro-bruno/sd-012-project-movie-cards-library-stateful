import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { buttonText,
      onClickButton,
    } = this.props;
    return (
      <button
        type="submit"
        label={ buttonText }
        data-testid="send-button"
        onClick={ onClickButton }
      >
        { buttonText }
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  buttonText: PropTypes.string,
  onClickButton: PropTypes.func,
};

ButtonAddMovie.defaultProps = {
  buttonText: '',
  onClickButton: '',
};

export default ButtonAddMovie;
