import React from 'react';
import PropTypes from 'prop-types';

class GenButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

GenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GenButton;
