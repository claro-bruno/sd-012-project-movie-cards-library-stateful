import React from 'react';

class ButtonInput extends React.Component {
  render() {
    const { handleButton } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ handleButton }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonInput.propTypes = {
  handleButton: PropTypes.func,
}.isRequired;

export default ButtonInput;
