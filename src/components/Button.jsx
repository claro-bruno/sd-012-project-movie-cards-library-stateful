import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { func } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ func }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
};
