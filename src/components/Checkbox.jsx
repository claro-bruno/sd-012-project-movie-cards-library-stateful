import React from 'react';
// import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <fieldset>
        <label data-testid="checkbox-input" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            id="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </fieldset>
    );
  }
}

// Checkbox.propTypes = {
//   bookmarkedOnly: PropTypes.bool,
//   onBookmarkedChange: PropTypes.func,
// };
// Checkbox.defaultProps = {
//   bookmarkedOnly: false,
// }

export default Checkbox;
