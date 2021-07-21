import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, testid, labelText, selectedGenre, onSelectedGenreChange,
      optionList, optionId } = this.props;
    const labelid = `${testid}-label`;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelid }
      >
        { labelText }
        <select
          id={ name }
          data-testid={ testid }
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          { optionList.map((element) => (
            <option
              key={ element.value }
              value={ element.value }
              data-testid={ optionId }
            >
              { element.content }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  optionId: PropTypes.string.isRequired,
};

export default Select;
