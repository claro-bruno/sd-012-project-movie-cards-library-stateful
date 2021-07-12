import React from 'react';
import PropTypes from 'prop-types'

class AddMovieSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        data-testid="subtitle-input"
        type="text"
        name="subtitle"
        id="subtitle" 
        value={ value }
        onChange={ onChange }
    />
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default AddMovieSubtitle;