import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const {
      selectName,
      dataLabelId,
      htmlForId,
      labelInput,
      selectId,
      selectValue,
      selectOnChange,
      optionId,
    } = this.props;
    return (
      <label data-testid={ dataLabelId } htmlFor={ htmlForId }>
        { labelInput }
        <select
          name={ selectName }
          id={ htmlForId }
          data-testid={ selectId }
          value={ selectValue }
          onChange={ selectOnChange }
        >
          <option data-testid={ optionId } value="action">
            Ação
          </option>
          <option data-testid={ optionId } value="comedy">
            Comédia
          </option>
          <option data-testid={ optionId } value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  selectName: PropTypes.string,
  dataLabelId: PropTypes.string,
  htmlForId: PropTypes.string,
  labelInput: PropTypes.string,
  selectId: PropTypes.string,
  selectValue: PropTypes.string,
  selectOnChange: PropTypes.func,
  optionId: PropTypes.string,
};

SelectGenre.defaultProps = {
  selectName: '',
  dataLabelId: '',
  htmlForId: '',
  labelInput: '',
  selectId: '',
  selectValue: '',
  selectOnChange: '',
  optionId: '',
};

export default SelectGenre;
