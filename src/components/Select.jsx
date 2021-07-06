import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

class Select extends Component {
  render() {
    const {
      selectLabel,
      selectLabelTestId,
      selectName,
      selectId,
      selectTestId,
      selectValue,
      selectOnChange,
    } = this.props;
    return (
      <div>
        <label data-testid={ selectLabelTestId } htmlFor={ selectId }>
          { selectLabel }
          <select
            name={ selectName }
            id={ selectId }
            data-testid={ selectTestId }
            value={ selectValue }
            onChange={ selectOnChange }
          >
            <Options
              optionValue=""
              optionName="Todos"
            />
            <Options
              optionValue="action"
              optionName="Ação"
              optionTestId="genre-option"
            />
            <Options
              optionValue="comedy"
              optionName="Comédia"
              optionTestId="genre-option"
            />
            <Options
              optionValue="thriller"
              optionName="Suspense"
              optionTestId="genre-option"
            />
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = PropTypes.shape({
  selectLabel: PropTypes.string,
  selectLabelTestId: PropTypes.string,
  selectName: PropTypes.string,
  selectId: PropTypes.string,
  selectTestId: PropTypes.string,
  selectOnChange: PropTypes.func,
  selectValue: PropTypes.string,
}).isRequired;

export default Select;
