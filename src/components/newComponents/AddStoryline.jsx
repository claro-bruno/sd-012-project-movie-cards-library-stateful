import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddStoryline extends Component {
  render() {
    const { storyline, handleChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="text"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  storyline: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default AddStoryline;
