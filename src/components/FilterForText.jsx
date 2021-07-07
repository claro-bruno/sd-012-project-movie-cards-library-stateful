import React from 'react';
import PropTypes from 'prop-types';

class FilterForText extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="search-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          id="search-text"
          name="searchText"
          data-testid="text-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
FilterForText.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterForText;
