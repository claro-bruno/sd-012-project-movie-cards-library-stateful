import React from 'react';
import PropTypes from 'prop-types';

class SelectOption extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     selectedGenre: '',
  //   };

  //   this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  // }

  // onSelectedGenreChange({ target }) {
  //   this.setState({ selectedGenre: target.value });
  // }

  render() {
    const { value, optionName } = this.props;
    return (
      <option
        value={ value }
        data-testid="select-option"
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
