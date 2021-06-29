import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     bookmarkedOnly: false,
  //   };

  //   this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  // }

  // onBookmarkedChange({ target }) {
  //   console.log(target.value);
  //   this.setState({
  //     bookmarkedOnly: target === false,
  //   });
  // }

  render() {
    // const { bookmarkedOnly } = this.state;
    const { inputType, inputLabel, onChangeCheckbox, inputValue } = this.props;
    return (
      <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
        {inputLabel}
        <input
          id="checkbox-input-label"
          type={ inputType }
          value={ inputValue }
          onChange={ onChangeCheckbox }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Checkbox;
