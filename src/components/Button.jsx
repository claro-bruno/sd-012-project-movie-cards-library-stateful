import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="reset"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
