import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSinopse extends Component {
  render() {
    const { handle, storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          id="storyline-input"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handle }
        />
      </label>
    );
  }
}

AddMovieSinopse.propTypes = {
  handle: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default AddMovieSinopse;
