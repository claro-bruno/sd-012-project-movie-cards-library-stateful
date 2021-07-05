import React from 'react';
import PropType from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      handleclick,
      dataTestId,
    } = this.props;

    return (
      <button
        type="submit"
        buttonID={ dataTestId }
        handleclick={ handleclick }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  dataTestId: PropType.string.isRequired,
  handleclick: PropType.func.isRequired,
};

export default Button;
