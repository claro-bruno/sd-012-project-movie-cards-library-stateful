import React from 'react';
import { func } from 'prop-types';

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

Button.propTypes = {
  onClick: func.isRequired,
};

export default Button;
