import React from 'react';
import PropTypes from 'prop-types'

class AddMovieTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        data-testid="title-input"
        type="text"
        name="title"
        id="title"
        value={ value }
        onChange={ onChange }
    />
    );
  }
}

AddMovieTitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default AddMovieTitle;