import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import '../style/Select.css';

class Select extends Component {
  render() {
    const {
      selectName,
      onChangeSelect,
      selectId,
      selectTestId,
      selectLabel,
      selectLabelTestId,
      selectValue,
    } = this.props;

    return (
      <div className="select-div">
        <label
          htmlFor={ selectId }
          data-testid={ selectLabelTestId }
          className="select-label"
        >
          { selectLabel }
        </label>
        <select
          className="select"
          name={ selectName }
          onChange={ onChangeSelect }
          id={ selectId }
          value={ selectValue }
          data-testid={ selectTestId }
        >
          <Option optionValue="" optionText="Todos" optionTestId="select-option" />
          <Option
            optionValue="action"
            optionText="Ação"
            optionTestId="select-option"
          />
          <Option
            optionValue="comedy"
            optionText="Comédia"
            optionTestId="select-option"
          />
          <Option
            optionValue="thriller"
            optionText="Suspense"
            optionTestId="select-option"
          />
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  selectName: PropTypes.string.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  selectId: PropTypes.string.isRequired,
  selectLabel: PropTypes.string.isRequired,
  selectLabelTestId: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectTestId: PropTypes.string.isRequired,
};

export default Select;
