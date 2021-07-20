import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorylineForm extends Component {
  render() {
    const { storylineValue, storylineOnChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          id="storyline-input"
          type="text"
          value={ storylineValue }
          data-testid="storyline-input"
          onChange={ storylineOnChange }
          name="storyline"
        />
      </label>
    );
  }
}

StorylineForm.propTypes = {
  storylineOnChange: PropTypes.string.isRequired,
  storylineValue: PropTypes.string.isRequired,
};

export default StorylineForm;
