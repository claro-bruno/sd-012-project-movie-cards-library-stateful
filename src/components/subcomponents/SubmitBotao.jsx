import React from 'react';
import { func } from 'prop-types';

class SubmitBotao extends React.Component {
  render() {
    const { submitForm } = this.props;
    return (
      <button
        type="submit"
        className="btn btn-primary"
        data-testid="send-button"
        onClick={ submitForm }
      >
        Adicionar filme
      </button>
    );
  }
}

SubmitBotao.propTypes = {
  submitForm: func.isRequired,
};

export default SubmitBotao;
