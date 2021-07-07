import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

class SelectSearchBar extends Component {
  render() {
    const {
      selectLabel,
      selectLabelTestId,
      selectName,
      selectId,
      selectType,
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
            type={ selectType }
            data-testid={ selectTestId }
            value={ selectValue }
            onChange={ selectOnChange }
          >
            <Options
              optionValue=""
              optionName="Todos"
              optionTestId="select-option"
            />
            <Options
              optionValue="action"
              optionName="Ação"
              optionTestId="select-option"
            />
            <Options
              optionValue="comedy"
              optionName="Comédia"
              optionTestId="select-option"
            />
            <Options
              optionValue="thriller"
              optionName="Suspense"
              optionTestId="select-option"
            />
          </select>
        </label>
      </div>
    );
  }
}

SelectSearchBar.propTypes = PropTypes.shape({
  selectLabel: PropTypes.string,
  selectLabelTestId: PropTypes.string,
  selectName: PropTypes.string,
  selectId: PropTypes.string,
  selectType: PropTypes.string,
  selectTestId: PropTypes.string,
  selectOnChange: PropTypes.func,
  selectValue: PropTypes.string,
}).isRequired;

export default SelectSearchBar;
