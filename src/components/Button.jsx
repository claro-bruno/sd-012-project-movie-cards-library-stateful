import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Button;
