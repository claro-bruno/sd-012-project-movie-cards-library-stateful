import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchText: '',
  //   };

  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  // }

  // onSearchTextChange({ target }) {
  //   this.setState({ searchText: target.value });
  // }

  render() {
    const { inputType, inputLabel, onChangeInput, inputValue } = this.props;
    // const { searchText } = this.state;
    return (
      <label htmlFor="text-input-label" data-testid="text-input-label">
        {inputLabel}
        <input
          data-testid="text-input"
          id="text-input-label"
          type={ inputType }
          value={ inputValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Input.propTypes = PropTypes.shape({
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}).isRequired;

export default Input;
