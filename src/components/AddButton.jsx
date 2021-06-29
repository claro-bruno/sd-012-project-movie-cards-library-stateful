import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
class AddButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="submit" data-testid="send-button" onClick={ onClick }>
        Adicionar filme
      </button>
    );
  }
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
