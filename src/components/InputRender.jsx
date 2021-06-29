import React from 'react';
import PropTypes from 'prop-types';

class InputRender extends React.Component {
  render() {
    const { name, nome, initValue, onChange, type, nameState } = this.props;
    return (
      <label
        data-testid={ `${name}-input-label` }
        htmlFor={ `label-${name}` }
      >
        { nome }
        <input
          data-testid={ `${name}-input` }
          type={ type }
          name={ nameState }
          value={ initValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRender.propTypes = {
  name: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  initValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  nameState: PropTypes.string.isRequired,
};

export default InputRender;
