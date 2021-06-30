import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const {
      inputType,
      inputLabel,
      onChangeCheckbox,
      checked,
      inputDataTestId,
      inputLabelId,
    } = this.props;
    return (
      <label htmlFor={ inputLabelId } data-testid={ inputLabelId }>
        {inputLabel}
        <input
          data-testid={ inputDataTestId }
          id="inputLabelId"
          type={ inputType }
          checked={ checked }
          onChange={ onChangeCheckbox }
          name="bookmarkedOnly"
        />
      </label>
    );
  }
}

Checkbox.propTypes = PropTypes.shape({
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  inputDataTestId: PropTypes.string.isRequired,
  inputLabelId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export default Checkbox;
