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
          id="bookmarked"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
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
};

export default InputCheckBoxTag;
