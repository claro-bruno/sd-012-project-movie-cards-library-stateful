import React from 'react';
import PropTypes from 'prop-types';

class SelectOption extends React.Component {
  render() {
    const { value, optionName, dataId } = this.props;
    return (
      <option
        value={ value }
        data-testid={ dataId }
      >
        { optionName }
      </option>
    );
  }
}

SelectOption.propTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  optionName: PropTypes.string.isRequired,
}).isRequired;

export default SelectOption;
