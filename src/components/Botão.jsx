import React from 'react';
import PropTypes from 'prop-types';

class Botao extends React.Component {
  render() {
    const { submit, onClick } = this.props;
    return (
      <button
        type="submit"
        name="myButton"
        data-testid="send-button"
        onClick={ () => { submit(); onClick(); } }
      >
        Adicionar filme
      </button>
    );
  }
}

Botao.propTypes = {
  submit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Botao;
