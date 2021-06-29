import React from 'react';
import PropTypes from 'prop-types';

class BttnForm extends React.Component {
  render() {
    const { button } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ button }
      >
        Adicionar filme
      </button>
    );
  }
}

BttnForm.propTypes = {
  button: PropTypes.func.isRequired,
};

export default BttnForm;
