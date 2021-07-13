import React from 'react';
import PropTypes from 'prop-types';

class InputCheckBoxTag extends React.Component {
  render() {
    const { textBoxLabel,
      dataTestidLabel, bookmarkedOnly, onBookmarkedChange, dataTestidInput } = this.props;
    return (
      <label
        data-testid={ dataTestidLabel }
        htmlFor={ dataTestidInput }
      >
        { textBoxLabel }
        <input
          name="bookmarkedOnly"
          id="bookmarkedO"
          type="checkbox"
          value={ bookmarkedOnly }
          checked={ bookmarkedOnly }
          onClick={ onBookmarkedChange }
          data-testid={ dataTestidInput }
        />
      </label>
    );
  }
}
InputCheckBoxTag.propTypes = {
  textBoxLabel: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  // filtroTrue: PropTypes.func.isRequired,
};

export default InputCheckBoxTag;
