import React from 'react';
import PropTypes from 'prop-types';

class InputTag extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor={ searchText }>
        Inclui o texto:
        <input
          id={ searchText }
          type={ searchText }
          onChange={ onSearchTextChange }
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
