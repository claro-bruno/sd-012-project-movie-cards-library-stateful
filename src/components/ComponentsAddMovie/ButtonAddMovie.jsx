import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ComponentsCriados/Button';

class ButtonAddMovie extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <Button
        datatestid="send-button"
        onclick={ handleClick }
        text="Adicionar filme"
      />);
  }
}

ButtonAddMovie.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
