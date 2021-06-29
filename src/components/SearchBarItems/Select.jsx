import React from 'react';
import PropTypes from 'prop-types';

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
    const { inputType, inputLabel, onChangeSelect, inputValue } = this.props;
    return (
      <label htmlFor="select-input-label" data-testid="select-input-label">
        {inputLabel}
        <select
          id="select-input"
          type={ inputType }
          value={ inputValue }
          onChange={ onChangeSelect }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Thriller</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Select;
