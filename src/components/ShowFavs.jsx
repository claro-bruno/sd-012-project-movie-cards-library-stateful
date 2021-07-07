import React from 'react';
import PropTypes from 'prop-types';

class ShowFavs extends React.Component {
  render() {
    const { value, checked, handleChange } = this.props;
    return (
      <label htmlFor="book-marked" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="book-marked"
          data-testid="checkbox-input"
          name="bookmarkerdOnly"
          value={ value }
          checked={ checked }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
ShowFavs.propTypes = {
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ShowFavs;
