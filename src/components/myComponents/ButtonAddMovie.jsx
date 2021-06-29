import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { buttonText,
      buttonId,
      onClickButton,
    } = this.props;
    return (
      <button
        type="submit"
        label={ buttonText }
        data-testid={ buttonId }
        onClick={ onClickButton }
      >
        { buttonText }
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  buttonText: PropTypes.string,
  buttonId: PropTypes.string,
  onClickButton: PropTypes.func,
};

ButtonAddMovie.defaultProps = {
  buttonText: '',
  buttonId: '',
  onClickButton: '',
};

export default ButtonAddMovie;
