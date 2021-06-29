import React from 'react';
import PropTypes from 'prop-types';

class InputChecked extends React.Component {
  render() {
    const {
      labelText,
      labelId,
      selectId,
      selectValue,
      onChangeInput,
      optionId,
    } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ selectId }>
        { labelText }
        <select
          data-testid={ selectId }
          value={ selectValue }
          onChange={ onChangeInput }
        >
          <option data-testid={ optionId } value="">Todos</option>
          <option data-testid={ optionId } value="action">Ação</option>
          <option data-testid={ optionId } value="comedy">Comédia</option>
          <option data-testid={ optionId } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputChecked.propTypes = {
  labelId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
  selectValue: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  optionId: PropTypes.string.isRequired,
};

export default InputChecked;
