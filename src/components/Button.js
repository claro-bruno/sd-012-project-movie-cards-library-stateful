import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick, handleChange } = this.props;
    // console.log(onClick)
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
          onChange={ handleChange }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
