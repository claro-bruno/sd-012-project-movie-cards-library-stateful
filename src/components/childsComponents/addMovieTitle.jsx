import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { handleChange, title } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddMovieTitle;
