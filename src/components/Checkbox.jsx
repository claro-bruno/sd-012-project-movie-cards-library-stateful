import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const {
      checkboxLabelText,
      checkboxLabelAtribute,
      checkedInput,
      checkboxOnChange,
      checkboxInputAtribute,
      checkboxInputType,
      checkboxId,
    } = this.props;
    return (
      <label htmlFor={ checkboxId } data-testid={ checkboxLabelAtribute }>
        { checkboxLabelText }
        <input
          type={ checkboxInputType }
          checked={ checkedInput }
          onChange={ checkboxOnChange }
          data-testid={ checkboxInputAtribute }
          id={ checkboxId }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  checkboxLabelText: PropTypes.string.isRequired,
  checkboxLabelAtribute: PropTypes.string.isRequired,
  checkedInput: PropTypes.bool.isRequired,
  checkboxOnChange: PropTypes.func.isRequired,
  checkboxInputAtribute: PropTypes.string.isRequired,
  checkboxInputType: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired,
};

export default Checkbox;
