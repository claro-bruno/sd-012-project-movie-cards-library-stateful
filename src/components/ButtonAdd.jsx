import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { onClickAdd } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClickAdd }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};
export default ButtonAdd;
