import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const {
      inputId,
      value,
      onChange,
      labelDescription,
    } = this.props;

    return (
      <label data-testid={ `${inputId}-label` } htmlFor={ inputId }>
        { labelDescription }
        <select
          id={ inputId }
          data-testid={ inputId }
          value={ value }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  inputId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelDescription: PropTypes.string,
};

InputSelect.defaultProps = {
  labelDescription: '',
};

export default InputSelect;
