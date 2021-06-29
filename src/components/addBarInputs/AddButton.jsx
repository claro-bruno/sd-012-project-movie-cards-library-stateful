import React from 'react';
import PropTypes from 'prop-types';

function AddButton({ clear }) {
  return (
    <button
      onClick={ clear }
      data-testid="send-button"
      type="button"
    >
      Adicionar filme

    </button>
  );
}

AddButton.propTypes = {
  clear: PropTypes.func.isRequired,
};
export default AddButton;
