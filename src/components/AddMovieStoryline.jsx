import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryLine extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />

      </label>

    );
  }
}
export default AddMovieStoryLine;

AddMovieStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
