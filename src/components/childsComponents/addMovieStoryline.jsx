import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { handleChange, storyline } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default AddMovieStoryline;
