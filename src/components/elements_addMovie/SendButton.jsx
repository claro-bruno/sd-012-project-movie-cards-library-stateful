import React from 'react';
import PropTypes from 'prop-types';

class SendButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
        name="button"
      >
        Adicionar filme
      </button>
    );
  }
}

SendButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SendButton;
