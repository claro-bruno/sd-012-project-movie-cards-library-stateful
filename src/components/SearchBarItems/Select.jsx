import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

class Select extends React.Component {
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
    // const { selectedGenre } = this.state;
    const { inputLabel, onChangeSelect, inputValue } = this.props;
    return (
      <label htmlFor="select-input-label" data-testid="select-input-label">
        {inputLabel}
        <select
          id="select-input"
          data-testid="select-input"
          value={ inputValue }
          onChange={ onChangeSelect }
        >
          <SelectOption value="" optionName="Todos" />
          <SelectOption value="action" optionName="Ação" />
          <SelectOption value="comedy" optionName="Comédia" />
          <SelectOption value="thriller" optionName="Suspense" />
        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.shape({
  inputLabel: PropTypes.string.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}).isRequired;

export default Select;
