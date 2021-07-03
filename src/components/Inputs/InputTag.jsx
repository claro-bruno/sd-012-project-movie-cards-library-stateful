import React from 'react';
import PropTypes from 'prop-types';

class InputTag extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      textDoInput, dataLabelId, dataInputId } = this.props;
    return (
      <label
        data-testid={ dataLabelId }
        htmlFor={ searchText }
      >
        { textDoInput }
        <input
          value={ searchText }
          id={ searchText }
          type={ searchText }
          onChange={ onSearchTextChange }
          data-testid={ dataInputId }
          // checked={ }
        />
      </label>
    );
  }
}
InputTag.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imagePath: PropTypes.string,
}.require;

export default InputTag;
