import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovieTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title-input"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddMovieTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default InputAddMovieTitle;
