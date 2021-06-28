import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextarea extends React.Component {
  render() {
    const { onChange, storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieTextarea.propTypes = {
  onChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default AddMovieTextarea;
