import React from 'react';
import PropTypes from 'prop-types';

class InputTag extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      textDoInput, dataLabelId, dataInputId } = this.props;
    return (
      // console.log(this.props)
      <label
        data-testid={ dataLabelId }
        htmlFor={ searchText }
      >
        { textDoInput }
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          id={ searchText }
          type="text"
          data-testid={ dataInputId }
          // checked={ }
        />
      </label>
    );
  }
}
InputTag.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  textDoInput: PropTypes.string.isRequired,
  dataLabelId: PropTypes.string.isRequired,
  dataInputId: PropTypes.string.isRequired,
};

export default InputTag;
